"use client";

import React, { Dispatch, FC } from "react";
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
import { WalletState, DisconnectOptions } from "@web3-onboard/core";
import { ChainId } from "@web3-onboard/common";

import { useWalletStore } from "@/store/wallet-store";
import CustomModal from "../shared/modal";
import { formatAddress, verifyChain } from "@/utils/wallet-utils";
import { ethers } from "ethers";

interface DisconnetButton {
  wallet: WalletState;
  disconnect: (options: DisconnectOptions) => void;
  setIsModalOpen: Dispatch<React.SetStateAction<boolean>>;
}

const DisconnectButton: FC<DisconnetButton> = ({
  wallet,
  disconnect,
  setIsModalOpen,
}) => {
  const walletConnected = useWalletStore((state) => state.setIsWalletConnected);
  const setIsSupportedChain = useWalletStore(
    (state) => state.setIsSupportedChain,
  );

  return (
    <button
      onClick={() => {
        if (wallet) {
          disconnect({ label: wallet?.label });
          walletConnected(false);
          setIsModalOpen(false);
          setIsSupportedChain(false);
        }
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

const WalletConnect = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const isWalletConnected = useWalletStore((state) => state.isWalletConnected);
  const walletConnected = useWalletStore((state) => state.setIsWalletConnected);
  const isRehydrated = useWalletStore((state) => state.isRehydrated);

  const [isCopied, setIsCopied] = useState(false);

  const isSupportedChain = useWalletStore((state) => state.isSupportedChain);
  const setIsSupportedChain = useWalletStore(
    (state) => state.setIsSupportedChain,
  );

  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();

  // useEffect(() => {
  //   if (wallet) {
  //     const isSupported = verifyChain(wallet);
  //     setIsSupportedChain(!isSupported);
  //   }
  // }, [wallet]);

  const connectWallet = async () => {
    const connectedWallets = await connect();

    if (connectedWallets?.length) {
      const isSupported = verifyChain(connectedWallets?.[0]?.chains?.[0]?.id);
      setIsSupportedChain(isSupported);
      walletConnected(true);
    }
  };

  // console.log("wallet", wallet);

  const copyToClipboard = async () => {
    const address = wallet?.accounts?.[0]?.address;
    if (address) {
      try {
        await navigator.clipboard.writeText(
          ethers.getAddress(wallet?.accounts?.[0]?.address),
        );
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

  // if (wallet) {
  //   let checksum = ethers.getAddress(wallet?.accounts?.[0]?.address);
  //   console.log("checksum", checksum);
  // }

  useEffect(() => {
    if (wallet?.provider) {
      const provider = wallet.provider;

      provider.on("accountsChanged", (accounts: string[]) => {
        if (accounts.length === 0) {
          walletConnected(false);
          setIsSupportedChain(false);
          console.log("Wallet disconnected - no accounts found");
        }
      });

      provider.on("chainChanged", (chainId: ChainId) => {
        // console.log("chainid", chainId);
        const isSupported = verifyChain(chainId);
        setIsSupportedChain(isSupported);
      });

      // Clean up event listeners when component unmounts or wallet changes
      return () => {
        provider.removeListener("accountsChanged", () => {});
        provider.removeListener("chainChanged", () => {});
      };
    }
  }, [wallet, walletConnected]);

  if (!isRehydrated) {
    return null;
  }

  return (
    <>
      {!wallet && !isWalletConnected ? (
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
                className={`flex items-center gap-2 font-bold ${isSupportedChain ? "text-white" : "text-red-500"}`}
              >
                {isSupportedChain ? (
                  <Image src={Base} width={20} alt="Base Icon" />
                ) : (
                  <div className="rounded-full border border-red-500 p-[3px]">
                    <FaExclamation size={10} />
                  </div>
                )}

                <p>{formatAddress(wallet.accounts?.[0]?.address)}</p>
              </div>
            </button>

            <CustomModal isVisible={isModalOpen} styles="max-w-[360px]">
              <div className="relative flex flex-col justify-center p-4 py-2">
                {isSupportedChain ? (
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

                      <DisconnectButton
                        wallet={wallet}
                        disconnect={disconnect}
                        setIsModalOpen={setIsModalOpen}
                      />
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

                    <div className="space-y-2">
                      <DisconnectButton
                        wallet={wallet}
                        disconnect={disconnect}
                        setIsModalOpen={setIsModalOpen}
                      />
                    </div>
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
