import React from "react";

const Card = ({img}) => {
    return (
        <div className="container-list-xephang-from">
            <img className="card-item-img" src={img} alt="" />
            <div className="card-item-content">
                <h1 className=" text-heading-name-xephang-card">Cà phê hòa tan G7 </h1>
                <p className=" text-title-xephang-card">Trung Nguyên Legend</p>
                <div className="img-rate-xephang">
                    <img className="icon-star" src="/assets/Icons/Star.png" alt="" />
                    <img className="icon-star" src="/assets/Icons/Star.png" alt="" />
                    <img className="icon-star" src="/assets/Icons/Star.png" alt="" />
                    <img className="icon-star" src="/assets/Icons/Star.png" alt="" />
                    <img className="icon-star" src="/assets/Icons/Star.png" alt="" />
                </div>
                <p className="text-four-color">4.7 / 5.0</p>
            </div>
        </div>
    )
}

export default Card;
