import React from "react";
import Image from "next/image";
import FooterLogo from "@/public/footer-logo.svg";
import Link from "next/link";
import { footerLinks } from "@/utils/utils";

const Footer = () => {
  return (
    <footer className="overflow-hidden bg-deep-green">
      <div className="container">
        <div className="flex flex-col justify-between gap-10 pb-10 pt-[1.75rem] sm:items-center sm:gap-2">
          <Link href={"/"}>
            <Image
              src={FooterLogo}
              width={192}
              alt="mobilum-footer-logo"
              className="w-32 max-w-[12rem] md:w-auto"
            />
          </Link>

          <ul className="flex flex-col gap-6 text-xl font-bold text-white sm:flex-row sm:gap-10">
            {footerLinks?.map((link) => (
              <li key={link?.id}>
                <Link
                  href={link?.path}
                  target={`${link?.newTab && "_blank"}`}
                  className=" transition-colors duration-300 hover:text-light-green"
                >
                  {link?.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className=" -mx-[100%] h-[0.5px] bg-white/35" />

        <div className="flex flex-col items-center justify-between gap-2 py-5 text-sm text-silver sm:flex-row">
          <p>Copyright {new Date().getFullYear()} &copy;</p>

          <div className="flex gap-4">
            <Link href={"/"} className=" ">
              Terms
            </Link>
            <Link href={"/"} className="">
              Privacy
            </Link>

            <Link href={"/"} className="">
              Policy and Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
