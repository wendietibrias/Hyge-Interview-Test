import navigationLinks from "@/libs/constants/navigation-links";
import LogoImage from "./LogoImage";
import { desktopFontSize } from "@/libs/cores/font-size";

const Navbar = () => {
    return (
        <nav className={`w-full @container py-7 z-[99999] fixed top-0 left-0`}>
            <div className="w-[75%] @max-lg:w-[90%] flex items-center justify-between mx-auto">
           <LogoImage />
           <ul className="flex items-center gap-x-10">
             {navigationLinks.map((item,idx: number) => (
                 <li key={idx}>
                    <a href={item.href} className={`navigation-link-item text-white relative ${desktopFontSize.linkTextSmall}`}>{item.title}</a>
                 </li>
             ))}
           </ul>
            </div>
        </nav>
    )
}

export default Navbar;