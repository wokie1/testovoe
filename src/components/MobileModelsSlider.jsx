import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import "../styles/mobileModels.css";
import getImgPath from "../getImgPath";
const MobileModelsSlider = ({ data }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    if (!data || data.length === 0) return null;
    
    return (
        <div className="mobile-models-section vh-100 position-relative">
            <div className="mobile-models-header text-white text-center py-4">
                <h2 className="mobile-models-title">МОДЕЛЬНЫЙ РЯД ROLLS-ROYCE</h2>
            </div>
        
            <Swiper
                modules={[Pagination, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }}
                grabCursor={true}
                onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
                className="mobile-models-swiper"
            >
                {data.map((model, index) => (
                    <SwiperSlide key={index}>
                        <div className="mobile-model-image-container">
                            <img 
                                src={`/images${getImgPath(model.imgUrl)}`}
                                alt={model.title}
                                className="mobile-model-image"
                            />
                            <div className="mobile-model-overlay"></div>
                            <h3 className="mobile-model-name">{model.title}</h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            
            <div className="mobile-button-container">
                <button className="mobile-details-btn">ПОДРОБНЕЕ</button>
            </div>
            
            <div className="mobile-availability-link">
                <a href="#availability" className="text-white text-decoration-none">
                    АВТОМОБИЛИ В НАЛИЧИИ →
                </a>
            </div>
        </div>
    );
};

export default MobileModelsSlider;