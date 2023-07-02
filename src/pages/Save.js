import React, { Fragment } from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import MySliderSave from "../components/MySliderSave";

function Save() {
    return (
        <Fragment>
            <Menu />
            {/* <!-- ------------------------------------SLIDER----------------------------------------> */}

            {/* <!-- ------------------------------------CONTAINER----------------------------------------> */}
            <div className="container-xephang wow animate__animated animate__fadeIn animate__delay-0.8s">
                <h1 className="container-title-xephang text-heading2 text-thir-color">Danh sách yêu thích</h1>
                <div className="container-search-xephang">
                    <img className="icon-search-xephang" src="/assets/Icons/Search.png" alt="" />
                    <input id="find" className="input-search-xephang" type="text" maxlength="100" placeholder="Sản phẩm, nhà sản xuất,....." onkeyup="search()" />
                </div>



                <div className="container-content-xephang">
                    <div className="container-xephang-from">
                        <h1 className="text-thir-color text-heading-name-xephang-from">Gần đây</h1>
                        <MySliderSave />
                    </div>
                </div>

                

            </div>

            {/* <!-- ------------------------------------CONTAINER----------------------------------------> */}


            {/* <!-- ------------------------------------FOOTER----------------------------------------> */}
            <Footer />

        </Fragment>
    )
}

export default Save;