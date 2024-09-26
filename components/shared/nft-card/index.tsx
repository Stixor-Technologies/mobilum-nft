"use client";

import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import Button from "@/components/button";
import CustomModal from "../modal";
import { FaXmark } from "react-icons/fa6";
import { useWalletStore } from "@/store/wallet-store";
import { ImageType } from "@/interface/interface";
import { getGasFee, handlePayment } from "@/utils/api-calls";
import { WalletState } from "@web3-onboard/core";
import { ethers } from "ethers";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Spinner from "@/components/spinner";

interface NftCardProps {
  wallet: WalletState | null;
  handleConnect: () => void;
  imageData: ImageType;
  isNFTMinting: number;
}

const NftCard: FC<NftCardProps> = ({
  wallet,
  handleConnect,
  imageData,
  isNFTMinting,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const isSupportedChain = useWalletStore((state) => state.isSupportedChain);
  const [gasFee, setGasFee] = useState<any>();
  const [isPaying, setIsPaying] = useState<boolean>(false);
  const router = useRouter();

  const BuyNft = async () => {
    try {
      setIsPaying(true);
      const resp = await handlePayment(imageData?.id, imageData?.price);
      if (resp) {
        router.push(resp?.outputRedirectToUrl);
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.detail, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
      });
    } finally {
      setIsPaying(false);
    }
  };

  useEffect(() => {
    if (isModalOpen && wallet?.accounts?.[0]?.address) {
      (async () => {
        const fee = await getGasFee(
          ethers.getAddress(wallet?.accounts?.[0]?.address),
          imageData?.id,
        );

        if (fee) setGasFee(fee);
      })();
    }
  }, [isModalOpen, wallet]);

  return (
    <>
      <li
        className={`clip relative aspect-[308/390] overflow-hidden ${isNFTMinting === imageData?.id && "pointer-events-none opacity-75"} `}
      >
        <button onClick={() => setIsModalOpen(true)}>
          <Image
            src={imageData?.image_url}
            alt=""
            fill
            className="object-cover transition-all duration-300 hover:scale-110"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,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"
          />
        </button>

        <Button
          variant="secondary"
          styles={
            "absolute bottom-3 sm:bottom-2 left-1/2 -translate-x-1/2 uppercase"
          }
          onClick={() => setIsModalOpen(true)}
        >
          {isNFTMinting && isNFTMinting === imageData?.id ? (
            <span className="flex w-full items-center gap-2.5">
              <Spinner size="size-4" /> Minting
            </span>
          ) : (
            "Buy Now"
          )}
        </Button>
      </li>

      <CustomModal isVisible={isModalOpen} styles="max-w-[22.5rem]">
        <div className="flex flex-col justify-center p-4 py-2">
          <div className="mb-2 flex items-center justify-end font-bold">
            <button
              className="-mr-2.5 rounded-full p-2.5 hover:bg-black/30"
              onClick={() => setIsModalOpen(false)}
            >
              <FaXmark size={16} />
            </button>
          </div>

          <div className="flex flex-col gap-4 pb-5">
            <Image
              src={imageData?.image_url}
              width={360}
              height={360}
              alt=""
              className="mx-auto rounded-lg"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,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"
            />

            <div className="flex items-center justify-between px-2">
              <p className="text-alternative text-xs font-normal leading-5 sm:text-sm">
                Chain
              </p>
              <p className="text-default max-w-[55%] truncate text-xs font-normal capitalize leading-5 sm:text-sm">
                Base Mainnet
              </p>
            </div>

            <div className="flex items-center justify-between px-2">
              <p className="text-alternative text-xs font-normal leading-5 sm:text-sm">
                NFT Price
              </p>
              <p className="text-default max-w-[55%] truncate text-xs font-normal capitalize leading-5 sm:text-sm">
                {`${imageData?.price} USD`}
              </p>
            </div>

            {wallet && gasFee && (
              <div className="flex items-center justify-between px-2">
                <p className="text-alternative text-xs font-normal leading-5 sm:text-sm">
                  Gas Fee
                </p>
                <p className="text-default max-w-[55%] truncate text-xs font-normal capitalize leading-5 sm:text-sm">
                  {`${gasFee?.USD_Amount} USD`}
                </p>
              </div>
            )}
          </div>

          {wallet ? (
            isSupportedChain ? (
              <Button
                disabled={!gasFee}
                variant="primary"
                styles={"ml-auto"}
                onClick={BuyNft}
                loading={isPaying}
              >
                Mint Now
              </Button>
            ) : (
              <p>
                This app supports Base Mainnet only. Switch your network to
                continue.
              </p>
            )
          ) : (
            <Button
              variant="primary"
              styles={"ml-auto"}
              onClick={handleConnect}
            >
              Connect to Mint
            </Button>
          )}
        </div>
      </CustomModal>
    </>
  );
};

export default NftCard;
