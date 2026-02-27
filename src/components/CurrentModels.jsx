import "../styles/currentModels.css";
import getImgPath from "../getImgPath";
const CurrentModels = ({ imgUrl, title }) => {
    return (
        <div className="model-card">
            <img src={`/images${getImgPath(imgUrl)}`} alt="image" />
            <h2 className="title">{title}</h2>
            <div className="btn-container">
                <button className="btn">ПОДРОБНЕЕ</button>
            </div>
            <p>АВТОМОБИЛИ В НАЛИЧИИ →</p>
        </div>
    );
};

export default CurrentModels;