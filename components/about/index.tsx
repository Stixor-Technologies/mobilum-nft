import React from "react";
import Image from "next/image";
import About from "@/public/strive.png";
import AboutBlob from "@/public/blobs/about-blob.svg";

const AboutUs = () => {
  return (
    <section className="bg-[url('/about-bg.png')] bg-cover bg-center bg-no-repeat py-32 sm:py-[13vw] 2xl:py-[16rem]">
      <div className="container flex flex-col items-center justify-between gap-[9vw] md:flex-row xl:gap-0">
        <div className="text-white md:w-[60%] md:max-w-[32.1875rem] xl:w-full">
          <h2 className="font-furore text-[clamp(2rem,5vw,4rem)] leading-tight">
            About Us
          </h2>
          <p className=" mt-[.875rem] text-lg lg:text-2xl">
            Lorem ipsum dolor sit amet consectetur. Iaculis ultricies gravida in
            pulvinar lobortis quam feugiat ultricies. Dignissim nec cras eu
            ultrices sollicitudin accumsan. Auctor varius in elit mi. Mattis
            faucibus faucibus elementum tortor.
          </p>
        </div>

        <div className="relative items-center justify-center overflow-visible ">
          <Image src={About} width={528} alt="about" />
          <Image
            src={AboutBlob}
            alt="about-blob"
            fill
            className="absolute top-0"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
