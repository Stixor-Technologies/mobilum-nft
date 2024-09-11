"use client";
import { useState, useRef, useEffect } from "react";

const FaqItem = ({
  title,
  content,
}: {
  index: number;
  title: string;
  content: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState("0px");
  const contentRef = useRef<HTMLDivElement>(null);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      setHeight(`${contentRef?.current?.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [isOpen]);
  return (
    <div
      className={`text-green mx-auto max-w-[46.125rem] rounded-lg bg-[#0C2E25] px-3 py-3 duration-100 sm:px-6`}
    >
      <button
        onClick={toggleAccordion}
        className="flex w-full items-center justify-between gap-3 text-left font-bold sm:gap-6 md:text-lg"
      >
        <span>{title}</span>
        <span
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-6"
            >
              <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-6"
            >
              <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
            </svg>
          )}
        </span>
      </button>
      <div
        ref={contentRef}
        className="transition-max-height overflow-hidden duration-500 ease-in-out "
        style={{ maxHeight: height }}
      >
        <p className="py-5 font-thin md:text-lg">{content}</p>
      </div>
    </div>
  );
};

const Faqs = () => {
  const items = [
    {
      title:
        "Lorem ipsum dolor sit amet consectetur. Donec vitae ut scelerisque mauris mauris aenean congue facilisis pulvinar.",
      content:
        "Lorem ipsum dolor sit amet consectetur. Donec vitae ut scelerisque mauris mauris aenean congue facilisis pulvinar. Lorem ipsum dolor sit amet consectetur. Donec vitae ut scelerisque mauris mauris aenean congue facilisis pulvinar.",
    },

    {
      title:
        "Lorem ipsum dolor sit amet consectetur. Donec vitae ut scelerisque mauris mauris aenean congue facilisis pulvinar.",
      content:
        "Lorem ipsum dolor sit amet consectetur. Donec vitae ut scelerisque mauris mauris aenean congue facilisis pulvinar. Lorem ipsum dolor sit amet consectetur. Donec vitae ut scelerisque mauris mauris aenean congue facilisis pulvinar.",
    },

    {
      title:
        "Lorem ipsum dolor sit amet consectetur. Donec vitae ut scelerisque mauris mauris aenean congue facilisis pulvinar.",
      content:
        "Lorem ipsum dolor sit amet consectetur. Donec vitae ut scelerisque mauris mauris aenean congue facilisis pulvinar. Lorem ipsum dolor sit amet consectetur. Donec vitae ut scelerisque mauris mauris aenean congue facilisis pulvinar.",
    },

    {
      title:
        "Lorem ipsum dolor sit amet consectetur. Donec vitae ut scelerisque mauris mauris aenean congue facilisis pulvinar.",
      content:
        "Lorem ipsum dolor sit amet consectetur. Donec vitae ut scelerisque mauris mauris aenean congue facilisis pulvinar. Lorem ipsum dolor sit amet consectetur. Donec vitae ut scelerisque mauris mauris aenean congue facilisis pulvinar.",
    },

    {
      title:
        "Lorem ipsum dolor sit amet consectetur. Donec vitae ut scelerisque mauris mauris aenean congue facilisis pulvinar.",
      content:
        "Lorem ipsum dolor sit amet consectetur. Donec vitae ut scelerisque mauris mauris aenean congue facilisis pulvinar. Lorem ipsum dolor sit amet consectetur. Donec vitae ut scelerisque mauris mauris aenean congue facilisis pulvinar.",
    },

    {
      title:
        "Lorem ipsum dolor sit amet consectetur. Donec vitae ut scelerisque mauris mauris aenean congue facilisis pulvinar.",
      content:
        "Lorem ipsum dolor sit amet consectetur. Donec vitae ut scelerisque mauris mauris aenean congue facilisis pulvinar. Lorem ipsum dolor sit amet consectetur. Donec vitae ut scelerisque mauris mauris aenean congue facilisis pulvinar.",
    },
  ];

  return (
    <section className="container mb-14 text-white lg:mb-[8.1875rem]">
      <h2 className="text-center font-furore text-[clamp(2rem,5vw,3.5rem)] leading-tight">
        FAQ'S
      </h2>

      <p className="mt-[.9375rem] text-center">
        Discover how Mobilum powerful solutions can elevate NFT experience.
      </p>

      <div className="mt-8 flex flex-col gap-4">
        {items.map((item, index) => (
          <FaqItem
            key={index}
            index={index + 1}
            title={item.title}
            content={item?.content}
          />
        ))}
      </div>
    </section>
  );
};
export default Faqs;
