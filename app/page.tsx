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
        <div className="relative flex items-center py-20 sm:py-[clamp(8rem,16vw,13rem)] 2xl:py-[20rem]">
          <Image
            src={Circle}
            alt="floating-circle"
            className="absolute left-[12vw] top-[6vw] hidden w-7 max-w-10 sm:block lg:w-auto 2xl:left-52 2xl:top-[8.75rem]"
          />

          <Image
            src={Triangle}
            alt="floating-triangle"
            className="absolute bottom-[12vw] right-[10vw] hidden w-7 max-w-12 sm:block lg:w-auto 2xl:bottom-[20.625rem]  2xl:right-52"
          />

          <Image
            src={Square}
            alt="floating-square"
            className="absolute bottom-[15vw] left-[5vw] hidden w-7 max-w-9 sm:block lg:w-auto 2xl:bottom-[23.125rem] 2xl:left-36"
          />

          <Image
            src={FloatingNFT2}
            width={103}
            alt="floating-nft-2"
            className="absolute bottom-[22vw] left-[5vw] hidden w-20 max-w-[6.4375rem] md:block lg:w-auto 2xl:bottom-[27.5rem] 2xl:left-36"
          />

          <div className="relative mx-auto max-w-[48.5625rem]">
            <h1 className="relative z-10 mx-auto mb-[3vw] text-center font-furore text-3xl leading-tight text-white sm:text-5xl lg:text-[4rem]">
              Transforming{" "}
              <span className=" whitespace-nowrap">
                you
                <span className="halfFilled relative inline-block font-furore [-webkit-text-stroke:0.5px_white] before:absolute before:left-0 before:top-0 before:hidden before:h-full before:w-1/2 before:text-white before:content-['r'] md:text-transparent md:before:block">
                  r
                </span>
              </span>{" "}
              <br /> Images into NFT <br /> Instantly
            </h1>
            <Image
              src={FloatingNFT}
              width={126}
              alt=""
              className="absolute -right-[4.6875rem] -top-7 hidden w-[6.875rem]  max-w-[7.875rem] rotate-[5deg] md:block lg:-right-[5.2188rem] lg:-top-8 lg:w-auto"
            />
          </div>
        </div>

        <ImagesList />
      </section>

      <AboutUs />
      <Faqs />
    </>
  );
}
