import Image from "next/image";

export default function HeaderItem({ title, icon }) {
    return (
        <div className="header-item">
            <Image height={30} width={30} src={icon} alt={title}></Image>
            <p>{title}</p>
        </div>
    );
}
