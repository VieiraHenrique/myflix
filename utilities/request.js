import { API_KEY } from "./variables";

const requests = {
    trending: {
        title: "Trending",
        url: `/trending/all/week?api_key=${API_KEY}`,
    },
    topRated: {
        title: "Top rated",
        url: `/movie/top_rated?api_key=${API_KEY}`,
    },
    action: {
        title: "Action",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    },
    comedy: {
        title: "Comedy",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    },
    horror: {
        title: "Horror",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    },
    romance: {
        title: "Romance",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    },
    mystery: {
        title: "Mystery",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    },
    scifi: {
        title: "SciFi",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    },
    animation: {
        title: "Animation",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    },
    tv: {
        title: "TV Movies",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
    },
};

export default requests;
