"use client";

import React, { FC, useState } from "react";
import Image from "next/image";
import DummyImage from "@/public/dummy.png";
import Button from "@/components/button";
import CustomModal from "../modal";
import { FaXmark } from "react-icons/fa6";

// Define types for NftCard props
interface NftCardProps {
  wallet: any | null;
  handleConnect: () => void;
  //   setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  //   isModalOpen: boolean;
}

const NftCard: FC<NftCardProps> = ({
  wallet,
  handleConnect,
  //   setIsModalOpen,
  //   isModalOpen,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  //
  //   console.log("wallet", wallet);

  const BuyNft = () => {
    console.log("Buy NFT");
  };

  return (
    <>
      <li className="clip relative aspect-[308/390] overflow-hidden">
        <button onClick={() => setIsModalOpen(true)}>
          <Image
            src={DummyImage}
            alt=""
            fill
            className="object-cover transition-all duration-300 hover:scale-110"
          />
        </button>

        <Button
          variant="secondary"
          styles={"absolute bottom-2 left-1/2 -translate-x-1/2 uppercase"}
          onClick={() => setIsModalOpen(true)}
        >
          Buy Now
        </Button>
      </li>

      <CustomModal isVisible={isModalOpen} styles="max-w-[360px]">
        <div className="flex flex-col justify-center p-4 py-2">
          <div className="mb-5 flex items-center justify-between font-bold">
            <div className="size-8" />
            <p>Image Name</p>

            <button
              className="rounded-full p-2.5 hover:bg-black/30"
              onClick={() => setIsModalOpen(false)}
            >
              <FaXmark size={16} />
            </button>
          </div>

          <div className="flex flex-col gap-4 pb-5">
            <Image src={DummyImage} alt="" className="mx-auto" />

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
                O USD
              </p>
            </div>
          </div>

          {wallet ? (
            <Button variant="primary" styles={"ml-auto"} onClick={BuyNft}>
              Mint Now
            </Button>
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
