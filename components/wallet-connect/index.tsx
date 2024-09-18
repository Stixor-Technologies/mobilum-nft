"use client";

import React from "react";
import Image from "next/image";
import Wallet from "@/public/icons/wallet.svg";
import Button from "../button";
import Base from "@/public/icons/base.svg";
import {
  FaRegCopy,
  FaArrowRightToBracket,
  FaXmark,
  FaExclamation,
  FaCheck,
} from "react-icons/fa6";

import { useEffect, useState } from "react";
import { useConnectWallet } from "@web3-onboard/react";
// import { ethers } from "ethers";
import { useWalletStore } from "@/store/wallet-store";
import CustomModal from "../shared/modal";
import { toast } from "react-toastify";
import { chainList } from "@/utils/utils";

const WalletConnect = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  //   const walletInfo = useWalletStore((state) => state.wallet);
  const updateWallet = useWalletStore((state) => state.updateWallet);

  const isWalletConnected = useWalletStore((state) => state.isWalletConnected);
  const walletConnected = useWalletStore((state) => state.setWalletConnected);
  const [isCopied, setIsCopied] = useState(false);
  const [unsupportedChain, setUnsupportedChain] = useState<boolean>(false);

  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
  // const [ethersProvider, setProvider] =
  //   useState<ethers.providers.Web3Provider | null>();

  // useEffect(() => {
  //   // If the wallet has a provider than the wallet is connected
  //   if (wallet?.provider) {
  //     setProvider(new ethers.providers.Web3Provider(wallet.provider, "any"));
  //     // if using ethers v6 this is:
  //     // ethersProvider = new ethers.BrowserProvider(wallet.provider, 'any')
  //   }
  // }, [wallet]);
  // "0x2105"
  // "0x1"

  useEffect(() => {
    // This useEffect runs whenever the wallet object updates (like on chain change)
    if (wallet) {
      const currentChainId = parseInt(wallet?.chains?.[0]?.id, 16);
      const isSupportedChain = chainList.some(
        (chain) => chain.id === currentChainId,
      );
      if (!isSupportedChain) {
        setUnsupportedChain(true);
      } else {
        setUnsupportedChain(false);
      }
    }
  }, [wallet]);

  const connectWallet = async () => {
    const connectedWallets = await connect();

    if (connectedWallets) {
      updateWallet({
        accountAddress: connectedWallets?.[0]?.accounts?.[0]?.address,
        chainId: connectedWallets?.[0]?.chains?.[0]?.id,
      });
      walletConnected(true);
    }
  };

  const formatAddress = (address: string) => {
    const start = address.slice(0, 4).toUpperCase();
    const end = address.slice(-4).toUpperCase();
    return `${start}…${end}`;
  };

  const copyToClipboard = async () => {
    const address = wallet?.accounts?.[0]?.address;
    if (address) {
      try {
        await navigator.clipboard.writeText(address);
        setIsCopied(true);
        // toast("Copied Address", {
        //   position: "top-right",
        //   autoClose: 5000,
        //   hideProgressBar: true,

        //   theme: "light",
        // });

        setTimeout(() => setIsCopied(false), 1500);
      } catch (error) {
        console.error("Failed to copy text:", error);
      }
    }
  };

  //   console.log("walletChanged", wallet);

  //   console.log("isWalletConnected", "wallet", isWalletConnected, !wallet);

  const disconnectBtn = () => {
    return (
      <button
        onClick={() => {
          console.log("disconnet");
          disconnect({ label: wallet?.label });
          setIsModalOpen(false);
        }}
        className="modal-item-button"
      >
        <div className="modal-item-button-icon">
          <FaArrowRightToBracket size={16} />
        </div>

        <span>Disconnect</span>
      </button>
    );
  };

  return (
    <>
      {/* {isWalletConnected && !wallet ? null : !isWalletConnected && !wallet ? ( */}
      {!wallet ? (
        <Button onClick={connectWallet} variant="primary" styles="uppercase">
          <span className="flex gap-1 sm:gap-2">
            <Image src={Wallet} alt="Wallet Icon" />
            Connect
          </span>
        </Button>
      ) : (
        wallet && (
          <>
            <button
              className="flex items-center gap-4 text-white"
              onClick={() => setIsModalOpen(true)}
            >
              <div
                className={`flex items-center gap-2 font-bold ${unsupportedChain ? "text-red-500" : "text-white"}`}
              >
                {unsupportedChain ? (
                  <div className="rounded-full border border-red-500 p-[3px]">
                    <FaExclamation size={10} />
                  </div>
                ) : (
                  <Image src={Base} width={20} alt="Base Icon" />
                )}

                <p>{formatAddress(wallet.accounts?.[0]?.address)}</p>
              </div>
            </button>

            <CustomModal isVisible={isModalOpen} styles="max-w-[360px]">
              <div className="relative flex flex-col justify-center p-4 py-2">
                {!unsupportedChain ? (
                  <>
                    <button
                      className="ml-auto rounded-full p-2.5 hover:bg-black/30"
                      onClick={() => setIsModalOpen(false)}
                    >
                      <FaXmark size={16} />
                    </button>

                    <div className="mb-2 flex items-center justify-center gap-1 text-xl font-bold">
                      <h2>{formatAddress(wallet?.accounts?.[0]?.address)}</h2>

                      <button
                        className="rounded-full p-2.5 hover:bg-black/30"
                        onClick={copyToClipboard}
                      >
                        <FaRegCopy size={14} />
                      </button>
                    </div>

                    <div className="space-y-2">
                      <div className="modal-item-button cursor-pointer">
                        <div className="flex size-9 items-center justify-center">
                          <Image src={Base} width={28} alt="Base Icon" />
                        </div>

                        <span>Base Mainnet</span>
                      </div>

                      {/* <button className="modal-item-button">
                        <div className="modal-item-button-icon">
                          <FaArrowRightToBracket size={16} />
                        </div>

                        <span>Disconnect</span>
                      </button> */}
                      {disconnectBtn()}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="mb-1 flex items-center justify-between font-bold">
                      <div className="size-8" />
                      <p>Switch Network</p>

                      <button
                        className="rounded-full p-2.5 hover:bg-black/30"
                        onClick={() => setIsModalOpen(false)}
                      >
                        <FaXmark size={16} />
                      </button>
                    </div>

                    <p className="mb-3 text-center text-sm">
                      This app supports Base Mainnet only. Switch your network
                      to continue.
                    </p>

                    <div className="space-y-2">{disconnectBtn()}</div>
                  </>
                )}

                {isCopied && (
                  <div className="absolute left-1/2 top-2 flex -translate-x-1/2  items-center justify-center gap-2 rounded-full bg-black/20 px-4 py-2 text-sm">
                    <span className="rounded-full bg-green-800/30 p-1 text-green-900">
                      <FaCheck />
                    </span>
                    <span>Address Copied</span>
                  </div>
                )}
              </div>
            </CustomModal>
          </>
        )
      )}
    </>
  );
};

export default WalletConnect;
