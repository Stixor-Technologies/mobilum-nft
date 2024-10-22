import React from "react";
import Image from "next/image";
import FooterLogo from "@/public/footer-logo.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="overflow-hidden bg-deep-green">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-10 pb-10 pt-[1.75rem] sm:gap-2">
          <Link href={"/"}>
            <Image
              src={FooterLogo}
              width={192}
              alt="mobilum-footer-logo"
              className="w-32 max-w-[12rem] md:w-auto"
            />
          </Link>
        </div>

        <div className="-mx-[100%] h-[0.5px] bg-white/35" />

        <div className="flex flex-col items-center justify-between gap-2 py-5 text-sm text-silver sm:flex-row">
          <p>Copyright {new Date().getFullYear()} &copy;</p>

          <div className="flex gap-4">
            <Link href={"/terms"} className=" ">
              Terms
            </Link>
            <Link href={"/privacy-policy"} className="">
              Privacy Policy
            </Link>

            <Link href={"refund-policy"} className="">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
