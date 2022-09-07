import { createContext, useState } from "react";

export const globalContext = createContext();

export default function GlobalContextProvider({ children }) {
    const [popupOpened, setPopupOpened] = useState(false);
    const [popupFilm, setPopupFilm] = useState({});

    const togglePopup = (film) => {
        setPopupFilm(film);

        if (popupOpened) {
            setPopupOpened(false);
        } else {
            setPopupOpened(true);
        }
    };

    const global = {
        togglePopup,
        popupOpened,
        popupFilm,
    };

    return <globalContext.Provider value={global}>{children}</globalContext.Provider>;
}
