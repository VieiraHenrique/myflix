import axios from "axios";
import { useContext } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Popup from "../components/Popup";
import Results from "../components/Results";
import { globalContext } from "../context/GlobalContext";
import requests from "../utilities/request";
import { API_BASE } from "../utilities/variables";

export default function HomePage({ data }) {
    const { popupOpened, popupFilm } = useContext(globalContext);

    return (
        <>
            <Header />
            <Navbar />
            <Results data={data.results} />
            {popupOpened && <Popup film={popupFilm} />}
        </>
    );
}

export async function getServerSideProps(ctx) {
    console.log(ctx.query);

    console.log(requests);

    const { data } = await axios.get(API_BASE + requests[ctx.query.results].url);

    return {
        props: {
            data,
        },
    };
}
