import React from "react";
import { Link } from "react-router-dom";

const Card = ({ img }) => {
    return (
        <div className="container-list-xephang-from">
            <Link to="/truyxuat"><img className="card-item-img margin-bot-20" src={img} alt="" /></Link>
            <div className="card-item-content">
                <Link to="/truyxuat"><h1 className=" text-heading-name-xephang-card">Cà phê hòa tan G7 </h1>
                <p className=" text-title-xephang-card">Trung Nguyên Legend</p></Link>
                <div className="img-rate-xephang">
                    <img className="icon-star" src="/assets/Icons/Star.png" alt="" />
                    <img className="icon-star" src="/assets/Icons/Star.png" alt="" />
                    <img className="icon-star" src="/assets/Icons/Star.png" alt="" />
                    <img className="icon-star" src="/assets/Icons/Star.png" alt="" />
                    <img className="icon-star" src="/assets/Icons/Star.png" alt="" />
                </div>
                <p class="text-four-color">4.7 / 5.0</p>
                <Link to="/save"><div class="box-button-like-xephang">
                    <img src="/assets/Icons/Love.png" alt="" />
                    <button class="bnt-like-xephang text-common-lab text-main-color">Yêu thích</button>
                </div></Link>
            </div>
        </div>
    )
}

export default Card;
