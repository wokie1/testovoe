import "../styles/newsBlock.css";
import getImgPath from "../getImgPath";
const NewsBlock = ({title, date, description, imgUrl}) => {
    return (
        <div className="news-card position-relative w-100"> 
            <div className="news-image-container w-100">
            <img src={`/images${getImgPath(imgUrl)}`} alt="news" className="news-image w-100 h-100" />
            </div>
            <div className="news-content px-2 px-md-0">
                <h3 className="news-card-title text-center text-md-start">
                    {title}
                </h3>
                <p className="news-date text-center text-md-start">
                    {date}
                </p>
                <p className="news-description text-center text-md-start">
                    {description}
                </p>
                <div className="d-flex d-md-none justify-content-center mt-3">
                    <button className="btn btn-outline-light btn-sm px-4">
                        ПОДРОБНЕЕ
                    </button>
                </div>
            </div>
            <div className="d-none d-md-block news-card-line"></div>
        </div>
    );
};

export default NewsBlock;