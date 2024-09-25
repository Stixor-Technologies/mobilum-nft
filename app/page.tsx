import Image from "next/image";
import Circle from "@/public/icons/circle.svg";
import Triangle from "@/public/icons/triangle.svg";
import Square from "@/public/icons/square.svg";
import AboutUs from "@/components/about";
import Faqs from "@/components/faq";
import ImagesList from "@/components/images-list";
import FloatingNFT from "@/public/floating-nft.png";
import FloatingNFT2 from "@/public/floating-nft-2.png";

export default function Home() {
  return (
    <>
      <section className="container relative bg-[url('/brick-wall.svg')] bg-contain bg-[center_top] bg-no-repeat">
        <div className="relative flex items-center py-[clamp(8rem,16vw,12rem)] 2xl:py-[20rem]">
          <Image
            src={Circle}
            alt="floating-circle"
            className="absolute left-[12vw] top-[6vw] 2xl:left-52 2xl:top-[140px]"
          />

          <Image
            src={Triangle}
            alt="floating-triangle"
            className="absolute bottom-[12vw] right-[10vw] 2xl:bottom-[330px] 2xl:right-52"
          />

          <Image
            src={Square}
            alt="floating-square"
            className="absolute bottom-[15vw] left-[5vw] 2xl:bottom-[370px] 2xl:left-36"
          />

          <Image
            src={FloatingNFT2}
            width={103}
            alt="floating-nft-2"
            className="absolute bottom-[22vw] left-[5vw] hidden w-20 md:block lg:w-auto lg:max-w-[103px] 2xl:bottom-[440px] 2xl:left-36"
          />

          <div className="relative mx-auto max-w-[48.5625rem]">
            <h1 className="relative z-10 mx-auto mb-[3vw] text-center font-furore text-5xl leading-tight text-white  lg:text-[4rem]">
              Transforming{" "}
              <span className=" whitespace-nowrap">
                you
                <span className="halfFilled relative inline-block font-furore [-webkit-text-stroke:0.5px_white] before:absolute before:left-0 before:top-0 before:hidden before:h-full before:w-1/2 before:text-white before:content-['r'] sm:text-transparent sm:before:block">
                  r
                </span>
              </span>{" "}
              <br /> Images into NFT <br /> Instantly
            </h1>
            <Image
              src={FloatingNFT}
              width={126}
              alt=""
              className="absolute -right-[84px] -top-8 hidden rotate-[4deg] sm:block"
            />

            {/* <Image
              src={FloatingNFT}
              width={145}
              alt=""
              className="absolute -right-[102px] -top-[45px] rotate-[4deg]"
            /> */}
          </div>
        </div>

        <ImagesList />
      </section>

      <AboutUs />
      <Faqs />
    </>
  );
}
