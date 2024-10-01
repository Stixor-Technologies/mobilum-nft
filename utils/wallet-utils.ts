import { ChainId } from "@web3-onboard/common";
import { chainList } from "./utils";
import { ethers } from "ethers";

const verifyChain = (chainID: ChainId): boolean => {
  const currentChainId = parseInt(chainID, 16);
  return chainList.some((chain) => chain.id === currentChainId);
};

const formatAddress = (address: string) => {
  const checkSumAddress = ethers.getAddress(address);
  const start = checkSumAddress?.slice(0, 4);
  const end = checkSumAddress?.slice(-4);
  return `${start}…${end}`;
};

export { verifyChain, formatAddress };
