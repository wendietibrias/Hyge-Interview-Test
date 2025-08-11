/** Here's Built In Static Image Data */
import { StaticImageData } from "next/image";

import kitchenIcon from "@/assets/icons/landing/services/kitchens.png";
import extensionIcon from "@/assets/icons/landing/services/extensions.png";
import externalWorkIcon from "@/assets/icons/landing/services/external-works.png";
import loftConversionIcon from "@/assets/icons/landing/services/loft-conversions.png";
import restorationIcon from "@/assets/icons/landing/services/restorations.png";
import bathRoomIcon from "@/assets/icons/landing/services/bathrooms.png";

type CompanyServiceType = {
    title: string;
    icon: StaticImageData;
    description: string;
}

const commpanyServices: CompanyServiceType[] = [
    {
        title:"Kitchens",
        icon: kitchenIcon,
        description:"At LifetimeArt, we design and build stunning kitchens tailored to your style and needs. Whether you're after a sleek modern space or a classic, timeless look, our expert team delivers high-quality craftsmanship, functionality, and attention to detail to create the heart of your home."
    },
    {
        title:"Loft Conversions",
        icon: loftConversionIcon,
        description:"Transform unused loft space into a beautiful, practical part of your home. From cozy bedrooms to bright home offices, we handle everything from structural adjustments to finishing touches, ensuring your new space is safe, stylish, and seamlessly integrated with your existing home."
    },
    {
        title:"Bath Rooms",
        icon: bathRoomIcon,
        description:"We create bathrooms that balance relaxation and practicality, with designs ranging from spa-inspired retreats to minimalist, functional spaces. Our team sources high-quality fixtures and finishes, ensuring durability, elegance, and comfort for years to come."
    },
    {
        title:"Extensions",
        icon: extensionIcon,
        description:"Expand your living space without compromising on style. Whether it’s a kitchen extension, a new family room, or an entire additional floor, we work closely with you to design and build an extension that complements your home and adds value."
    },
    {
        title:"Restorations",
        icon: restorationIcon,
        description:"Preserve the charm of your property while upgrading it for modern living. Our restoration work combines traditional craftsmanship with modern techniques to breathe new life into historic or worn-down spaces."
    },
    {
        title:"Bath Rooms",
        icon: externalWorkIcon,
        description:"Enhance the beauty and functionality of your outdoor areas. From garden landscaping to patios, pathways, and exterior lighting, we create inviting spaces that connect your home to nature."
    }
];

export default commpanyServices;