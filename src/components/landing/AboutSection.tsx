"use client"

import companyPortfolios from "@/libs/constants/company-portfolios";
import SectionTitle from "../reusable/SectionTitle";
import Image, { StaticImageData } from "next/image";
import { Swiper,SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import companyStats from "@/libs/constants/company-stats";



const AboutSection = () => {
return (
    <section className="w-full @container min-h-screen py-40">
      <div className="w-[75%] flex justify-between items-start mx-auto">
        <div className="">
          <SectionTitle
            titleStacks={["Home", "improvement", "specialists"]}
            badgeTitle="About"
            alignment="left"
          />
        </div>
        <div className="w-[45%]">
            <p className="text-[1rem]">
                Welcome to LifetimeArt , your trusted home improvement experts, dedicated to transforming homes with precision and care. With years of experience in building kitchens, bathrooms, garages, and more, we take pride in delivering top-quality craftsmanship and a seamless customer experience. Our mission is to bring your vision to life while ensuring clear communication and expert guidance at every step. Let’s create a home you’ll love!
            </p>
        </div>
      </div>
      <div className="mt-20">
         <Swiper 
           slidesPerView={'auto'}
           spaceBetween={20}
           autoplay={{
             delay:2500,
             disableOnInteraction:true,
           }}
           className="w-full"
         >
             {companyPortfolios.map((item: StaticImageData,idx: number) => (
                <SwiperSlide className="w-[400px]" style={{ width:400 }} key={idx}>
                     <div className="w-[400px] h-[470px] mr-3 rounded-md relative">
                        <Image objectFit="cover" src={item} alt={"Portofolio"} loading="lazy" fill/>
                     </div>
                </SwiperSlide>
             ))}
         </Swiper>
      </div>
      <div className="mt-20 w-[75%] mx-auto flex items-start justify-between">
         {companyStats.map((item,idx: number) => (
             <div className="w-[20%]" key={idx}>
                <h2 className="text-4xl text-dark-bg font-medium">{item.title}</h2>
                <h4 className="font-medium mt-4 mb-3">{item.subTitle}</h4>
                <p className="text-xs">{item.description}</p>
             </div>
         ))}
      </div>
    </section>
  );
};

export default AboutSection;
