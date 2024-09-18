"use client";
import React, { useState } from "react";
import NftCard from "../shared/nft-card";
import { useConnectWallet } from "@web3-onboard/react";

const ImagesList = () => {
  //   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();

  const handleConnect = async () => {
    if (!wallet) {
      await connect();
    }
  };

  return (
    <>
      <ul className="grid grid-cols-[repeat(auto-fill,_minmax(17rem,_1fr))] gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]?.map((val, index) => (
          <NftCard
            key={index}
            wallet={wallet}
            handleConnect={handleConnect}
            // setIsModalOpen={setIsModalOpen}
            // isModalOpen={isModalOpen}
          />
          // <div
          //   key={index}
          //   className="clip aspect-[308/390] rounded-lg bg-light-green"
          // />
          //   <div className="clip relative aspect-[308/390]">
          //     <Image src={DummyImage} alt="" fill className=" object-cover" />
          //     <Button
          //       variant="secondary"
          //       styles={"absolute bottom-2 left-1/2 -translate-x-1/2 uppercase"}
          //     >
          //       Buy Now
          //     </Button>
          //   </div>
        ))}
      </ul>
    </>
  );
};

export default ImagesList;
