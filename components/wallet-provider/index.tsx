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
    name: "Connect Wallet Example",
    icon: "<svg>My App Icon</svg>",
    description: "Example showcasing how to connect a wallet.",
    recommendedInjectedWallets: [
      { name: "MetaMask", url: "https://metamask.io" },
      // { name: "Coinbase", url: "https://wallet.coinbase.com/" },
    ],
  };

  const web3Onboard = init({
    wallets,
    chains,
    appMetadata,
    // theme: "dark",

    theme: {
      "--w3o-background-color": "#171717",

      //   "--w3o-foreground-color": "#127058",
      // "--w3o-border-color": "#127058",
      "--w3o-text-color": "#fff",
      //   "--w3o-action-color": "#eee",
      //   "--w3o-border-radius": "5px",
    },

    connect: {
      autoConnectLastWallet: true,
      showSidebar: false,
    },

    // theme: "system",
  });

  return (
    <Web3OnboardProvider web3Onboard={web3Onboard}>
      <Header />
      <main className="pt-[100px]">{children}</main>
    </Web3OnboardProvider>
  );
};

export default WalletProvider;
