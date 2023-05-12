import React, { Fragment } from "react";
import Menu from "./Menu";
import MySlider from "../components/MySlider";

function XepHang() {
    return (
        <Fragment>
            <Menu />
            <div className="slider-xephang">
                {/* <source src="/assets/video/TrailerCoffee.mp4" type="video/mp4"/> */}
                {/* <video autoplay muted loop> <source src="/assets/video/TrailerCoffee.mp4" /></video> */}
                <video src="/assets/video/TrailerCoffee.mp4" autoplay muted loop />
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
            <footer>
                <div className="footer-content">

                    <div className="footer-item footer-website">
                        <h1 className="text-footer-heading">Website</h1>
                        <ul>
                            <li className="text-footer-title"><a className="text-link" href="">Trang chủ</a></li>
                            <li className="text-footer-title"><a className="text-link" href="">Giới thiệu </a></li>
                            <li className="text-footer-title"><a className="text-link" href="">Về chúng tôi</a></li>
                            <li className="text-footer-title"><a className="text-link" href="">Xếp hạng</a></li>
                        </ul>

                    </div>
                    <div className="footer-item">
                        <h1 className="text-footer-heading">Q&A</h1>
                        <ul>
                            <li className="text-footer-title"><a className="text-link" href="">Trang Web này hoạt động như thế nào?</a>
                            </li>
                            <li className="text-footer-title"><a className="text-link" href="">Sản phẩm mà tôi truy xuất có chất lượng
                                không?</a></li>
                            <li className="text-footer-title"><a className="text-link" href="">Nếu sản phẩm tôi mua không có mã QR thì
                                là tốt hay xấu?</a></li>
                        </ul>


                    </div>
                    <div className="footer-item">
                        <h1 className="text-footer-heading">Địa chỉ liên hệ</h1>
                        <p className="text-footer-title">Địa chỉ: 1 Phù Đổng Thiên Vương, Phường 8, TP. Đà Lạt</p>
                        <p className="text-footer-title">SĐT: 0858 902 111</p>
                        <p className="text-footer-title">Email: daihocdalat@gmail.com</p>
                    </div>
                    <div className="footer-item">
                        <h1 className="text-footer-heading">Thông báo</h1>
                        <p className="text-footer-title">Nếu bạn muốn nhận thông báo của trang Web hãy nhấn vào nút “cho phép” của
                            trình duyệt để nhận những
                            thông báo mới nhất.</p>

                    </div>
                </div>
                <div className="footer-bot">
                    <div className="footer-logo">
                        <img src="/assets/img/logo.png" alt="" />
                        <p>cleancoffee</p>
                    </div>
                    <div className="footer-icon-contact">
                        <img className="icon-footer" src="/assets/Icons/Facebook.png" alt="" />
                        <img className="icon-footer" src="/assets/Icons/Twitter.png" alt="" />
                        <img className="icon-footer" src="/assets/Icons/Email.png" alt="" />
                        <img className="icon-footer" src="/assets/Icons/Instagram.png" alt="" />
                    </div>
                </div>

            </footer>

        </Fragment>
    )
}

export default XepHang;