"use client";

import Image from "next/image";
import SectionTitle from "../reusable/SectionTitle";
import serviceResult from "@/assets/images/landing/services/service-result.png";
import commpanyServices from "@/libs/constants/company-services";
import { useState } from "react";

import openIcon from "@/assets/icons/global/open-plus.svg";
import closeIcon from "@/assets/icons/global/close-x.svg";

const ServiceSection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-white-gray-secondaryBg flex flex-col items-center justify-center py-10 min-h-screen @container">
      <SectionTitle
        titleStacks={["What we do"]}
        badgeTitle="Services"
        alignment="center"
      />
      <div className="w-[75%] mx-auto mt-20 flex items-start justify-between">
        <div className="w-[40%] h-[480px] relative">
          <Image
            src={serviceResult}
            objectFit="cover"
            className="rounded-xl"
            alt="Service Result"
            loading="lazy"
            fill
          />
        </div>
        <div className="w-[50%]">
          {commpanyServices.map((item, idx: number) => (
            <div
              className={`w-full mb-7 border-b  border-dark-bg/10 pb-3`}
              key={idx}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-5">
                  <Image
                    width={32}
                    height={32}
                    src={item.icon}
                    alt={item.title}
                  />
                  <h4 className="font-medium text-sm">{item.title}</h4>
                </div>
                <button onClick={() => !selectedIndex || selectedIndex !== idx ? setSelectedIndex(idx) : setSelectedIndex(null)} className="cursor-pointer">
                  {selectedIndex === idx ? (
                    <Image src={closeIcon} alt="Close" width={14} height={14} />
                  ) : (
                    <Image src={openIcon} alt="Open" width={14} height={14} />
                  )}
                </button>
              </div>
              {selectedIndex === idx && (
                <p className="mt-5 text-[0.85rem] text-dark-secondary-bg">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
