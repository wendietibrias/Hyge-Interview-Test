"use client" 

import navigationLinks from "@/libs/constants/navigation-links";
import LogoImage from "./LogoImage";
import { desktopFontSize } from "@/libs/cores/font-size";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isNavbarActive,setIsNavbarActive] = useState<boolean>(false);

  useEffect(() => {
    const { scrollY } = window;
    if(scrollY > 120) setIsNavbarActive(true);

    const handleScroll = () => {
      const { scrollY } = window;
      if(scrollY > 120){
         setIsNavbarActive(true);
      } else {
         setIsNavbarActive(false);
      }
    };

    // Attach the event listener
    window.addEventListener("scroll", handleScroll, { passive:true });

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <nav className={`navigation-bar w-full @container py-4 z-[99999] fixed top-0 left-0 ${isNavbarActive ? 'active' : ''}`}>
      <div className="w-[75%] @max-lg:w-[90%] flex items-center justify-between mx-auto">
        <LogoImage />
        <ul className="flex items-center gap-x-10">
          {navigationLinks.map((item, idx: number) => (
            <li key={idx}>
              <a
                href={item.href}
                className={`navigation-link-item text-white relative ${desktopFontSize.linkTextSmall}`}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
