import React, { Fragment } from "react";
import Menu from "./Menu";

function Index() {
    return (
        <Fragment>
        <Menu />
            {/* <!-- ------------------------------------SLIDER----------------------------------------> */}
            <div className="slider">
                <div className="slider-from">
                    <div className="slider-content">
                        <div className="slider-content-text">

                            <span className="text-thir-color">Sản Phẩm</span>
                            <h1 className="text-four-color">Cà Phê G7 hòa tan đen</h1>
                            <p className="text-thir-color">Khối lượng tịnh: 50g</p>
                            <p className="text-thir-color">Ngày xuất xưởng: 3/10/2023</p>
                            <p className="text-thir-color">Loại cafe: Cafe hòa tan</p>
                            <h4 className="text-thir-color">Sản phẩm chính hãng</h4>
                            <h3 className="text-thir-color">Chứng nhận bởi Cục an toàn Thực Phẩm</h3>
                        </div>


                    </div>
                    <div className="slider-img">
                        <img className="hinhcaphe" src="assets/img/HomeImg (1).png" alt="" />
                    </div>
                </div>

            </div>
            {/* <!-- ------------------------------------SLIDER----------------------------------------> */}


            {/* <!-- ------------------------------------CONTAINER----------------------------------------> */}
            <div className="container">
                <h1 className="text-heading-container text-thir-color">Quá trình đến tay người tiêu dùng</h1>

                <div className="container-content">

                    <div className="container-content-left">
                        <div className="content-left-list">
                            <div className="content-list-top">
                                <div className="number">
                                    <p className="text-main-color">1</p>
                                </div>
                                <h3 className="text-four-color">Gieo hạt</h3>
                            </div>
                            <p>Ngày gieo hạt: 4/12/2022</p>
                        </div>

                        <div className="content-left-list">
                            <div className="content-list-top">
                                <div className="number">
                                    <p className="text-main-color">2</p>
                                </div>
                                <h3 className="text-four-color">Chăm sóc</h3>
                            </div>
                            <p>Thời gian chăm sóc: 3/1/2023 đến 2/4/20223</p>
                        </div>

                        <div className="content-left-list">
                            <div className="content-list-top">
                                <div className="number">
                                    <p className="text-main-color">3</p>
                                </div>
                                <h3 className="text-four-color">Thu hoạch</h3>
                            </div>
                            <p>Thời gian thu hoạch: 3/4/2022</p>
                        </div>

                        <div className="content-left-list">
                            <div className="content-list-top">
                                <div className="number">
                                    <p className="text-main-color">4</p>
                                </div>
                                <h3 className="text-four-color">Chế biến</h3>
                            </div>
                            <p>Thời gian chế biến: 30/4/2023</p>
                        </div>

                        <div className="content-left-list">
                            <div className="content-list-top">
                                <div className="number">
                                    <p className="text-main-color">5</p>
                                </div>
                                <h3 className="text-four-color">Vận chuyển</h3>
                            </div>
                            <p>Thời gian vận chuyển: 19/9/2023</p>
                        </div>

                        <div className="content-left-list">
                            <div className="content-list-top">
                                <div className="number">
                                    <p className="text-main-color">6</p>
                                </div>
                                <h3 className="text-four-color">Phân phối </h3>
                            </div>
                            <p>Thời gian phân phối : 3/10/2023</p>
                        </div>
                    </div>

                    <div className="container-content-right">
                        <img src="assets/img/HomeImg (2).png" alt="" />
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
                        <img src="assets/img/logo.png" alt="" />
                        <p>cleancoffee</p>
                    </div>
                    <div className="footer-icon-contact">
                        <img className="icon-footer" src="assets/Icons/Facebook.png" alt="" />
                        <img className="icon-footer" src="assets/Icons/Twitter.png" alt="" />
                        <img className="icon-footer" src="assets/Icons/Email.png" alt="" />
                        <img className="icon-footer" src="assets/Icons/Instagram.png" alt="" />
                    </div>
                </div>

            </footer>

        </Fragment>
    )
}

export default Index;