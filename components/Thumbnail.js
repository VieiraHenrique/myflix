import Image from "next/image";
import { useContext } from "react";
import { globalContext } from "../context/GlobalContext";

export default function Thumbnail({ film }) {
    const { togglePopup } = useContext(globalContext);

    return (
        <div className="thumbnail" onClick={() => togglePopup(film)}>
            <Image src={`https://image.tmdb.org/t/p/w780/${film.poster_path}`} width={500} height={600} alt={"poster"} placeholder="blur" blurDataURL />
            <h2 className="title-small-extra mt-1">{film.title || film.name}</h2>
        </div>
    );
}
