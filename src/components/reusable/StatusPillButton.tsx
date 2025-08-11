import statusPillButton from "@/assets/icons/global/pill-button.png";
import Image from "next/image";

interface StatusPillButtonProps {
    title: string;
    textSize: string;
}

const StatusPillButton = (props: StatusPillButtonProps) => {
    const { title,textSize } = props;
    return (
        <button className="flex items-center glass-button">
          <Image src={statusPillButton} alt="Available Work" />
          <span className={`${textSize}`}>{title}</span>
        </button>
    )
}

export default StatusPillButton;