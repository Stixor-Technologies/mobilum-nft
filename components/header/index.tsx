import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.svg";
import Wallet from "@/public/icons/wallet.svg";
import Button from "../button";

const Header = () => {
  return (
    <header className={`fixed z-40 w-full py-6 duration-300`}>
      <div className="container">
        <div className={`flex items-center justify-between duration-300 `}>
          <div className="flex">
            <Link href={"/"}>
              <Image
                src={Logo}
                width={169}
                height={44}
                alt="header-logo"
                className="w-[120px] sm:w-auto"
              />
            </Link>
          </div>

          <Button variant="primary" styles={"uppercase"}>
            <span className="flex gap-1 sm:gap-2">
              <Image src={Wallet} alt="" />
              Connect
            </span>
          </Button>
        </div>
        <div className="from-ferozi to-pink h-[1px] bg-gradient-to-b from-0% to-100% opacity-60" />
      </div>
    </header>
  );
};

export default Header;
