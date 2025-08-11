import { StaticImageData } from "next/image";
import { ReactNode } from "react";

interface GlassButtonProps {
    title: string;
    icon: ReactNode | StaticImageData;
    textSize: string;
}

const GlassButton = (props: GlassButtonProps) => {
  const { title,textSize,icon } = props;  

  return (
     <button className={`glass-button`}>
        <span className={`${textSize} mr-2`}>{title}</span>
        {icon as ReactNode}
    </button>
  )
}

export default GlassButton;