"use client";
import React, { ReactNode } from "react";
import { Web3OnboardProvider, init } from "@web3-onboard/react";
import injectedModule from "@web3-onboard/injected-wallets";
import Header from "../header";
import { chainList } from "@/utils/utils";

const WalletProvider = ({ children }: { children: ReactNode }) => {
  const injected = injectedModule();

  const wallets = [injected];

  const chains = chainList;

  const appMetadata = {
    name: "Mobilum Nft",
    icon: "/wallet-ap-icon.svg",
    description: "Website to mint Nft",

    recommendedInjectedWallets: [
      { name: "MetaMask", url: "https://metamask.io" },
    ],
  };

  const web3Onboard = init({
    wallets,
    chains,
    appMetadata,

    theme: {
      "--w3o-background-color": "#171717",
      "--w3o-text-color": "#fff",
    },

    connect: {
      autoConnectLastWallet: true,
      showSidebar: false,
    },
  });

  return (
    <Web3OnboardProvider web3Onboard={web3Onboard}>
      <Header />
      <main className="pt-[6.25rem]">{children}</main>
    </Web3OnboardProvider>
  );
};

export default WalletProvider;
