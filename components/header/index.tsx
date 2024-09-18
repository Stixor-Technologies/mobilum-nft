import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.svg";
import WalletConnect from "../wallet-connect";

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

          {/* {connecting && <p className="text-white">Loader</p>} */}
          <WalletConnect />
        </div>
      </div>
    </header>
  );
};

export default Header;
