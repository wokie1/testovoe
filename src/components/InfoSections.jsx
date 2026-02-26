import React from 'react';
import infoBg from "../img/InfoSections.png";
import "../styles/info.css";

const InfoSections = () => {
    return (
        <div className="contacts-section min-vh-100 d-flex align-items-center justify-content-center bg-black text-white position-relative">
            <img src={infoBg} alt="" className='position-absolute top-0 start-0 h-100 w-100 object-fit-cover' style={{zIndex: 0}}/>
            <div className='position-relative text-center text-white fonts px-3 px-md-5' style={{zIndex: 1}}>
                <h1 className='fontZagl mb-4'>Официальный дилер<br className="d-md-none"/> Rolls-Royce АВИЛОН</h1>
                <p className='parag mb-4'>
                Компания Rolls-Royce была основана в 1904 году. Именно тогда встретились Чарльз Стюарт Роллс и Фредерик
                 Генри Ройс – два совершенно разных человека, объединённых единой целью: создать лучший в мире автомобиль.
                 И им это удалось! Этот союз стал новой вехой в истории автомобилестроения. На протяжении более
                 чем ста лет лимузины «Роллс-Ройс» по праву считаются истинными шедеврами инженерной мысли. Автомобили
                 британской марки подчёркивают элитный статус своих владельцев и являются эталоном
                </p>
                <button className='btn btn-light px-5 py-2'>ПОДРОБНЕЕ</button>
            </div>
        </div>
    );
};

export default InfoSections;