import Image from "next/image";
import { useContext } from "react";
import { globalContext } from "../context/GlobalContext";

export default function Popup() {
    const { togglePopup, popupFilm } = useContext(globalContext);
    console.log(popupFilm);

    return (
        <div className="popup">
            <div className="popup-backdrop" onClick={togglePopup}></div>
            <div className="wrapper">
                <div className="popup-main">
                    <Image src={`https://image.tmdb.org/t/p/w780/${popupFilm.poster_path}`} width={500} height={600} alt={"poster"} placeholder="blur" blurDataURL />
                </div>
                <div className="popup-details">
                    <h2 className="title-small">{popupFilm.release_date ? popupFilm.release_date.slice(0, 4) : "No date available"}</h2>
                    <h1 className="title-main">{popupFilm.title}</h1>
                    <hr />
                    <p className="mt-4 overview">{popupFilm.overview}</p>
                </div>
            </div>
        </div>
    );
}
