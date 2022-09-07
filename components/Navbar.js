import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
import requests from "../utilities/request";

export default function Navbar() {
    const router = useRouter();

    const redirect = (key) => {
        router.push(`?results=${key}`);
    };

    return (
        <div className="navbar">
            <div className="wrapper">
                <ul>
                    {requests &&
                        Object.entries(requests).map(([key, { title, url }]) => {
                            return (
                                <li key={title} onClick={() => redirect(key)}>
                                    {title}
                                </li>
                            );
                        })}
                </ul>
            </div>
        </div>
    );
}
