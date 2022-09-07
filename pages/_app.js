import Head from "next/head";
import GlobalContextProvider from "../context/GlobalContext";
import "../styles/styles.scss";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Movie/TV App</title>
                <link rel="shortcut icon" href="./favicon.png" type="image/x-icon" />
            </Head>
            <GlobalContextProvider>
                <Component {...pageProps} />
            </GlobalContextProvider>
        </>
    );
}

export default MyApp;
