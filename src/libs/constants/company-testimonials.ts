import { StaticImageData } from "next/image";

import testimonialPerson1 from "@/assets/images/landing/testimonials/testimonial-person-1.png";
import testimonialPerson2 from "@/assets/images/landing/testimonials/testimonial-person-2.png";
import testimonialPerson3 from "@/assets/images/landing/testimonials/testimonial-person-3.png";

type CompanyTestimonialType = {
    testimonialContent: string;
    testimonialPersonProfile: StaticImageData;
    testimonialPersonName: string;
    rating: number;
}

const companyTestimonials: CompanyTestimonialType[] = [
    {
        testimonialContent:"I couldn’t be happier with my loft conversion. The attention to detail and quality of work were outstanding. Refit made the whole process smooth and stress-free!",
        testimonialPersonName:"Emily Carter",
        testimonialPersonProfile: testimonialPerson1,
        rating:5
    },
    {
        testimonialContent:"Refit transformed our outdoor space with a beautiful garden path. The work was completed on time, and the finish is excellent. A great team to work with!",
        testimonialPersonName:"Laura Davies",
        testimonialPersonProfile: testimonialPerson2,
        rating:5
    },
     {
        testimonialContent:"I couldn’t be happier with my loft conversion. The attention to detail and quality of work were outstanding. Refit made the whole process smooth and stress-free!",
        testimonialPersonName:"Michael Turner",
        testimonialPersonProfile: testimonialPerson3,
        rating:5
    },
];

export default companyTestimonials;