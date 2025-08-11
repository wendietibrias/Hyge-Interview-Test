import { StaticImageData } from "next/image";
import { CompanyProjectTypeEnum } from "../enums/company-project-type.enum";

import person1KitchenRefit from "@/assets/images/landing/projects/project-person-1.png";
import person2GardenPathBuild from "@/assets/images/landing/projects/project-person-2.png";
import person3BathroomRenovation from "@/assets/images/landing/projects/project-person-3.png";

import projectResult1KitchenRefit from "@/assets/images/landing/projects/project-result-1.png";
import projectResult2GardenPathBuild from "@/assets/images/landing/projects/project-result-2.png";
import projectResult3BathroomRenoation from "@/assets/images/landing/projects/project-result-3.png";

type CompanyProjectType = {
    title: string;
    description: string;
    type: CompanyProjectTypeEnum;
    duration: number;
    durationTimeDescription: string;
    testimonialDescription: string;
    testimonialPersonName: string;
    testimonialPersonProfile: StaticImageData;
    projectResultImage: StaticImageData;
}

const companyProjects: CompanyProjectType[] = [
    {
        title:"Modern kitchen refit",
        description:"This kitchen transformation brought sleek, modern design and enhanced  functionality to our client’s home. We installed custom cabinetry, high-quality worktops, and state-of-the-art appliances, creating a stylish yet practical space perfect for cooking and entertaining. With attention to every detail, we delivered a kitchen that balances aesthetics and usability.This kitchen transformation brought sleek, modern design and enhanced  functionality to our client’s home. We installed custom cabinetry, high-quality worktops, and state-of-the-art appliances, creating a stylish yet practical space perfect for cooking and entertaining. With attention to every detail, we delivered a kitchen that balances aesthetics and usability.",
        type: CompanyProjectTypeEnum.KITCHEN,
        duration:4,
        durationTimeDescription:"Weeks",
        testimonialDescription:"LifetimeArt completely transformed our kitchen, making it both beautiful and highly functional. The craftsmanship was outstanding, and the team was professional and communicative throughout. We couldn’t be happier with the result!",
        testimonialPersonName:"Rachel Morgan",
        testimonialPersonProfile: person1KitchenRefit,
        projectResultImage: projectResult1KitchenRefit
    },
    {
        title:"External garden path build",
        description:"Our team designed and built a durable, visually appealing garden path to enhance the outdoor space. Using premium materials, we created a seamless walkway that blends naturally with the landscape, providing both functionality and aesthetic charm. The result is a stylish, well-crafted path that elevates the overall garden design.",
        type: CompanyProjectTypeEnum.EXTERNAL_WORK,
        duration:6,
        durationTimeDescription:"Weeks",
        testimonialDescription:"The team at LifetimeArt did an amazing job on our garden path. It’s sturdy, looks fantastic, and has completely transformed our outdoor space. They listened to our vision and delivered exactly what we wanted—highly recommended!",
        testimonialPersonName:"Michael Turner",
        testimonialPersonProfile: person2GardenPathBuild,
        projectResultImage: projectResult2GardenPathBuild
    },
     {
        title:"Bathroom renovation",
        description:"We revitalized this bathroom with a fresh, modern design, incorporating high-end tiling, sleek fixtures, and efficient lighting. The layout was optimized to maximize space, creating a luxurious and relaxing atmosphere. The final result is a beautifully crafted bathroom that enhances both comfort and functionality.",
        type: CompanyProjectTypeEnum.BATHROOM,
        duration:4,
        durationTimeDescription:"Weeks",
        testimonialDescription:"LifetimeArt completely transformed our kitchen, making it both beautiful and highly functional. The craftsmanship was outstanding, and the team was professional and communicative throughout. We couldn’t be happier with the result!",
        testimonialPersonName:"Michael Turner",
        testimonialPersonProfile: person3BathroomRenovation,
        projectResultImage: projectResult3BathroomRenoation

    },
];

export default companyProjects;