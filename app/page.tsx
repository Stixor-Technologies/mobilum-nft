import BrickWall from "@/public/brick-wall.svg";
import Image from "next/image";
import Circle from "@/public/icons/circle.svg";
import Triangle from "@/public/icons/triangle.svg";
import AboutUs from "@/components/about";
import Faqs from "@/components/faq";
export default function Home() {
  return (
    <>
      <section className="container relative bg-[url('/brick-wall.svg')] bg-contain bg-[center_top] bg-no-repeat">
        <div className="relative z-20 flex items-center py-[clamp(8rem,16vw,12rem)] 2xl:py-[20rem]">
          <Image
            src={Circle}
            alt="floating-circle"
            className="absolute left-[12vw] top-[6vw] 2xl:left-52 2xl:top-[91px]"
          />

          <Image
            src={Triangle}
            alt="floating-triangle"
            className="absolute bottom-[12vw] right-[10vw] 2xl:bottom-64 2xl:right-36"
          />

          <h1 className="mx-auto mb-[3vw] max-w-[48.5625rem] text-center font-furore text-[clamp(2rem,5vw,4rem)] leading-tight text-white">
            Transforming your <br /> Images into NFT <br /> Instantly
          </h1>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,_minmax(19rem,_1fr))] gap-10">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]?.map((val, index) => (
            <div
              key={index}
              className="clip aspect-[308/390] rounded-lg bg-light-green"
            />
          ))}
        </div>
      </section>

      <AboutUs />
      <Faqs />
    </>
  );
}
