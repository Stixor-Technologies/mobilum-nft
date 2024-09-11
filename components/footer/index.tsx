import React from "react";
import Image from "next/image";
import FooterLogo from "@/public/footer-logo.svg";
import Button from "../button";
import Link from "next/link";
import { footerLinks } from "@/utils/utils";

const Footer = () => {
  return (
    <footer className="bg-deep-green overflow-hidden">
      <div className="container">
        <div className="flex flex-col justify-between gap-14 py-10 lg:flex-row lg:items-center lg:pb-[3.75rem] lg:pt-[5.375rem]">
          <Image src={FooterLogo} width={192} alt="mobilum-footer-logo" />

          <div className="flex w-full max-w-[59.25rem] flex-col justify-between gap-14 sm:flex-row sm:gap-20 md:gap-14">
            <div className="flex w-full max-w-[15.625rem] flex-col justify-between gap-6 text-xl font-bold text-white sm:flex-row sm:gap-0 lg:max-w-[19.9375rem]">
              <ul className="space-y-6">
                {footerLinks?.slice(0, 2)?.map((link) => (
                  <li key={link?.id}>
                    <Link
                      href={link?.path}
                      className=" transition-colors duration-300 hover:text-light-green"
                    >
                      {link?.title}
                    </Link>
                  </li>
                ))}
              </ul>

              <ul className="space-y-6">
                {footerLinks?.slice(2, 6)?.map((link) => (
                  <li key={link?.id}>
                    <Link
                      href={link?.path}
                      className="transition-colors duration-300 hover:text-light-green"
                    >
                      {link?.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex w-full max-w-[21.5rem] flex-col gap-4 sm:gap-5 xl:mr-16">
              <input
                type="email"
                placeholder="Enter your email"
                className=" w-full  rounded border border-white/35 bg-transparent px-3 py-3 text-white"
              />
              <Button variant={"primary"}>Join Us</Button>
            </div>
          </div>
        </div>

        <div className=" -mx-[100%] h-[0.5px] bg-white/35" />

        <div className="text-silver flex flex-col items-center justify-between gap-2 py-5 text-sm sm:flex-row">
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
