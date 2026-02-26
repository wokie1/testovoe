import NewsBlock from "./NewsBlock";
import "../styles/newsSections.css";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const NewsSections = () => {
    const [newsData, setNewsData] = useState([]);
    
    useEffect(() => {
        async function getNews() {
            try {
                const response = await fetch(`${process.env.REACT_APP_BITRIX_API_URL}?action=news`)
                const data = await response.json();
                setNewsData(data);
            } catch(err) {
                console.log("error:", err);
            }
        }
        getNews();
    }, []);
    
    return (
            <div className="news-section min-vh-100 bg-black text-white d-flex flex-column py-3 py-md-5">
                <div className="container">
                    <h2 className="news-title text-center mb-4 mb-md-5">
                        НОВОСТИ
                    </h2>
                </div>
                <div className="container"> 
                    <Swiper
                        modules={[Pagination, A11y]}
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        grabCursor={true}
                        touchRatio={1}
                        resistance={true}
                        resistanceRatio={0.85}
                        breakpoints={{
                            640: { 
                                slidesPerView: 1,
                                spaceBetween: 20 
                            },
                            768: { 
                                slidesPerView: 2,
                                spaceBetween: 25 
                            },
                            1024: { 
                                slidesPerView: 3,
                                spaceBetween: 30,
                                grabCursor: false
                            },
                            1400: { 
                                slidesPerView: 3,
                                spaceBetween: 40,
                                grabCursor: false
                            }
                        }}
                        className="news-swiper"
                    >
                        {newsData.map((value, index) => (
                            <SwiperSlide key={index}>
                                <div className="d-flex justify-content-center">
                                    <NewsBlock 
                                        title={value.title} 
                                        date={value.date} 
                                        description={value.description} 
                                        imgUrl={value.imageUrl}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        );
}

export default NewsSections;