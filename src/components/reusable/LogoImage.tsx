import logo from "@/assets/images/global/logo.png";
import Image from "next/image";

const LogoImage = () =>{ 
    return (
        <Image src={logo} loading="lazy" alt="LifetimeArt" />
    )
}

export default LogoImage;