import React, { Fragment } from "react";
import Menu from "../components/Menu";
import MySlider from "../components/MySlider";
import Footer from "../components/Footer";

function XepHang() {
    return (
        <Fragment>
            <Menu />
            <div className="slider-xephang">
                <video src="/assets/video/TrailerCoffee.mp4" autoPlay={"autoplay"} muted loop ></video>
                <div className="slider-xephang-text">
                    <h3 className="text-main-color slider-xephang-text-1">Chào mừng bạn đến với truyxuatcafe.com.vn</h3>
                    <h1 className="text-main-color slider-xephang-text-2">CÀ PHÊ SẠCH TUYÊN <br /> CHIẾN VỚI CÀ PHÊ BẨN. </h1>
                    <p className="text-main-color slider-xephang-text-3">Hãy cùng website khám phá những thức uống cafe của Việt Nam</p>
                    <button className="text-thir-color slider-xephang-bnt">Khám phá</button>
                </div>
            </div>
            {/* <!-- ------------------------------------SLIDER----------------------------------------> */}

            {/* <!-- ------------------------------------CONTAINER----------------------------------------> */}
            <div className="container-xephang">
                <div className="container-search-xephang">
                    <img className="icon-search-xephang" src="/assets/Icons/Search.png" alt="" />
                    <input id="find" className="input-search-xephang" type="text" maxlength="100" placeholder="Sản phẩm, nhà sản xuất,....." onkeyup="search()" />
                </div>



                <div className="container-content-xephang">
                    <div className="container-xephang-from">
                        <h1 className="text-thir-color text-heading-name-xephang-from">Cafe Hòa Tan</h1>
                        <MySlider />
                    </div>
                </div>

                <div className="container-content-xephang">


                    <div className="container-xephang-from">

                        <h1 className="text-thir-color text-heading-name-xephang-from">Cafe Rang Xay</h1>
                        <MySlider />

                    </div>


                </div>

                <div className="container-content-xephang">


                    <div className="container-xephang-from">

                        <h1 className="text-thir-color text-heading-name-xephang-from">Được Người Dùng Bình Chọn</h1>
                        <MySlider />

                    </div>


                </div>

                <div className="container-content-xephang">


                    <div className="container-xephang-from">

                        <h1 className="text-thir-color text-heading-name-xephang-from">Được Đánh Giá Cao Bởi Chuyên Gia</h1>
                        <MySlider />

                    </div>
                </div>

            </div>

            {/* <!-- ------------------------------------CONTAINER----------------------------------------> */}


            {/* <!-- ------------------------------------FOOTER----------------------------------------> */}
            <Footer />

        </Fragment>
    )
}

export default XepHang;