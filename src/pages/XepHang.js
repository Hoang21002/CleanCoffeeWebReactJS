import React, { Fragment } from "react";
import Menu from "../components/Menu";
import MySlider from "../components/MySlider";
import Footer from "../components/Footer";

function XepHang() {
    return (
        <Fragment>
            <Menu />
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