import Thumbnail from "./Thumbnail";

export default function Results({ data }) {
    return (
        <div className="results mt-10">
            <div className="wrapper">
                {data &&
                    data.map((film) => {
                        return <Thumbnail key={film.id} film={film} />;
                    })}
            </div>
        </div>
    );
}
