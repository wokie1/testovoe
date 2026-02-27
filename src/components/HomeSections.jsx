import 'bootstrap/dist/css/bootstrap.min.css';
import home_img from "../img/home.png";
import "../styles/home.css"
const HomeSections = () => {
    return(
        <div className="position-relative w-100 overflow-hidden">
            <img src={home_img} alt="background" className='hero-image' />
            <div className='position-absolute text-white top-0 w-100 fonts'>
                <div className="d-flex justify-content-around align-items-center w-100">
                    <p className="mb-0">Меню</p>
                    <div className="text-center position-relative centres">
                        <p className="mb-0 fw-bold textUP">Rolls-Royce</p>
                        <p className="mb-0 small textDown">MOTOR CARS</p>
                        <hr className="my-1" />
                        <p className="mb-0 textDown">АВИЛОН</p>
                    </div>
                    <p className="mb-0">+7 495 232 4141</p>
                </div>
                <hr className="w-75 mx-auto my-2 mt-5" /> 
            </div>
            <div className="position-absolute pos justify-content-around text-center text-white w-100">
                <h2 className='text_two'>Лучший ОФИЦИАЛЬНЫЙ ДИЛЛЕР ROLLS-ROYCE 2020</h2>
                <p className='text_one'>ROLLS-ROYCE AVILON</p>
                <button className='btn'>ПОДРОБНЕЕ</button>
            </div>
        </div>
    )
}

export default HomeSections;