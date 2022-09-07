import Image from "next/image";
import Link from "next/link";
import HeaderItem from "./HeaderItem";

export default function Header() {
    return (
        <header className="header">
            <div className="wrapper">
                <Link href={"/"}>
                    <a className="title">
                        <Image src={"/img/logo.svg"} width={30} height={30} alt={"Website logo"}></Image> myFlix
                    </a>
                </Link>
                <div className="header-list">
                    <HeaderItem title={"Home"} icon={"/img/icon-home.svg"} />
                    <HeaderItem title={"Trending"} icon={"/img/icon-bolt.svg"} />
                    <HeaderItem title={"Search"} icon={"/img/icon-search.svg"} />
                    <HeaderItem title={"Account"} icon={"/img/icon-user.svg"} />
                </div>
            </div>
        </header>
    );
}
