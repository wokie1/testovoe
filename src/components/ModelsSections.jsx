import React, { useEffect, useState } from 'react';
import "../styles/models.css";
import CurrentModels from "./CurrentModels";
import MobileModelsSlider from "./MobileModelsSlider";

const ModelsSection = () => {
    const [data, setData] = useState([]); 
    const [selectedModel, setSelectedModel] = useState('');
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BITRIX_API_URL}?action=cars`, {
                    headers: {
                      'ngrok-skip-browser-warning': 'true'
                    }
                  });
                const result = await response.json(); 
                setData(result); 
                if (result.length > 0) {
                    setSelectedModel(result[0].title); 
                }
            } catch (error) {
                console.error('Ошибка:', error);
            }
        };
        fetchData();
    }, []);
    
    if (isMobile) {
        return <MobileModelsSlider data={data} />;
    }
    
    return (
        <div className="d-flex vh-100">
            <div className="models-container d-flex flex-column bg-dark text-white">
                <div className="zagl-container w-100 d-flex justify-content-end p-4">
                    <div className="zagl">МОДЕЛЬНЫЙ РЯД ROLLS-ROYCE</div>
                </div>
                <div className="titles-container w-100 d-flex justify-content-end px-4">
                    <div className="titles">
                        {data.map((item, index) => (
                            <button 
                                key={index}
                                onClick={() => setSelectedModel(item.title)}
                                className={selectedModel === item.title ? 'active-model' : ''}
                            >
                                {item.title}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="models-cards-container">
                {data
                    .filter(item => item.title === selectedModel)
                    .map((value, index) => (
                        <CurrentModels 
                            key={index}
                            imgUrl={value.imgUrl} 
                            title={value.title} 
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default ModelsSection;