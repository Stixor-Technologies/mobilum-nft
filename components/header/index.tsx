"use client";
import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import Logo from "@/public/logo.svg";
import WalletConnect from "../wallet-connect";

const Header = () => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setIsTop(false) : setIsTop(true);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed z-40 w-full duration-300 ${!isTop ? "bg-black py-4" : "py-6"}`}
    >
      <div className="container">
        <div className={`flex items-center justify-between duration-300 `}>
          <div className="flex">
            {/* <Link href={"/"}>
              <Image
                src={Logo}
                width={169}
                height={44}
                alt="header-logo"
                className="w-[120px] sm:w-auto"
              />
            </Link> */}
          </div>

          <WalletConnect />
        </div>
      </div>
    </header>
  );
};

export default Header;
