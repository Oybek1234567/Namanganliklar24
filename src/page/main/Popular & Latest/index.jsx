import LatestNews from "../latestNews";
import Popular from "../popular";

const News = () => {
    return (
        <div style={{ display: "flex" }}>
            <LatestNews />
            <Popular />
        </div>
    );
};

export default News;
