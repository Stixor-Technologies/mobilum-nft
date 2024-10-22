"use client";
import React, { useState, useEffect } from "react";
import NftCard from "../shared/nft-card";
import { useSearchParams } from "next/navigation";
import { useConnectWallet } from "@web3-onboard/react";
import { verifyChain } from "@/utils/wallet-utils";
import { useWalletStore } from "@/store/wallet-store";
import { getImages, mintNft } from "@/utils/api-calls";
import { ImageType } from "@/interface/interface";
import ListSkeleton from "../skeletons/list-skeleton";
import { ethers } from "ethers";
import { toast } from "react-toastify";

const ImagesList = () => {
  const [{ wallet }, connect] = useConnectWallet();
  const searchParams = useSearchParams();

  const setIsSupportedChain = useWalletStore(
    (state) => state.setIsSupportedChain,
  );
  const walletConnected = useWalletStore((state) => state.setIsWalletConnected);

  const [imagesList, setImagesList] = useState<ImageType[] | undefined>(
    undefined,
  );

  const [loading, setLoading] = useState<boolean>(true);
  const [isNFTMinted, setIsNftMinted] = useState<boolean>(false);

  const nftId = searchParams.get("id");

  const handleConnect = async () => {
    const connectedWallets = await connect();
    if (connectedWallets?.length) {
      const isSupported = verifyChain(connectedWallets?.[0]?.chains?.[0]?.id);
      setIsSupportedChain(isSupported);
      walletConnected(true);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const imagesList = await getImages();
        if (imagesList) {
          setImagesList(imagesList);
        }
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [isNFTMinted]);

  useEffect(() => {
    if (nftId && wallet) {
      (async () => {
        try {
          const resp = await mintNft(
            Number(nftId),
            ethers.getAddress(wallet?.accounts?.[0]?.address),
          );

          if (resp?.status === "DECLINED") {
            history.replaceState(null, "", "/");
            return toast.error("Payment Declined", {
              position: "bottom-right",
              autoClose: 2000,
              hideProgressBar: true,
            });
          }

          setIsNftMinted(true);

          toast.success("Minting completed", {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: true,
          });

          history.replaceState(null, "", "/");
          setImagesList((prevImagesList) =>
            prevImagesList?.filter((image) => image.id !== Number(nftId)),
          );
        } catch (error) {
          toast.error("Minting Failed", {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: true,
          });
        }
      })();
    }
  }, [nftId, wallet]);

  return (
    <>
      {loading ? (
        <ListSkeleton />
      ) : imagesList ? (
        <ul className="mx-auto mb-20 grid gap-6 xs:grid-cols-2 sm:w-full sm:grid-cols-[repeat(auto-fill,_minmax(16rem,_1fr))]">
          {imagesList?.map((imageData) => (
            <NftCard
              key={imageData?.id}
              wallet={wallet}
              handleConnect={handleConnect}
              imageData={imageData}
              isNFTMinting={Number(nftId)}
            />
          ))}
        </ul>
      ) : (
        <>{null}</>
      )}
    </>
  );
};

export default ImagesList;
