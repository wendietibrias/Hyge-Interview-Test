import landingImage from "../../assets/images/landing/hero/hero-image.svg";
import { desktopFontSize } from "@/libs/cores/font-size";
import StatusPillButton from "../reusable/StatusPillButton";
import GlassButton from "../reusable/GlassButton";
import arrowRight from "@/assets/icons/global/arrow-right.png";
import starsIcon from "@/assets/icons/global/stars.svg";

import Image from "next/image";


const HeroSection = () => {
  return (
    <section className={`w-full @container bg-dark-bg h-screen`}>
      <div className="w-[75%] @max-lg:w-[90%] mx-auto h-full flex items-center justify-between">
        <div className="w-[50%]">
          <StatusPillButton
            textSize="text-[0.8rem]"
            title="Available for work"
          />
          <h1
            className={`text-white mt-3 ${desktopFontSize.titleTextLarge} leading-[3.4rem] font-medium`}
          >
            Your trusted partner <br /> for quality home <br /> improvement
          </h1>
          <p
            className={`text-white-gray-text mt-4 mb-8 w-[70%] ${desktopFontSize.descriptionTextSmall}`}
          >
            LifetimeArt delivers expert home improvements, creating beautiful
            and functional spaces with quality craftsmanship.
          </p>
          <GlassButton
            title="Work with us"
            icon={
              <span className="block w-[24px] h-[24px] rounded-full bg-white">
                <Image src={arrowRight} alt="Work with us" loading="lazy" />
              </span>
            }
            textSize="text-[0.8rem]"
          />
        </div>
        <div className="w-[45%] h-full relative">
          <Image
            src={landingImage}
            loading="lazy"
            className="rounded-2xl py-3 overflow-hidden"
            objectFit="cover"
            alt="Landing Page Image"
            fill
          />
          <div className="glass-card rounded-xl absolute bottom-7 right-7">
            <Image src={starsIcon} alt="Good" loading="lazy" width={85} height={95} objectFit="cover" />
            <h5 className="text-[0.85rem] font-medium mt-3">
              "LifetimeArt has been a game- changer for my home. Their ability
              to blend functionality with exquisite design is unparalleled."
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
