import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <Fragment>
            <footer>
                <div className="footer-content">

                    <div className="footer-item footer-website">
                        <h1 className="text-footer-heading">Website</h1>
                        <ul>
                            <li className="text-footer-title"><Link className="text-link" to="/">Trang chủ</Link></li>
                            <li className="text-footer-title"><Link className="text-link" to="/khampha">Khám phá </Link></li>
                            <li className="text-footer-title"><Link className="text-link" to="/xephang">Xếp hạng</Link></li>
                            <li className="text-footer-title"><Link className="text-link" to="/about">Về chúng tôi</Link></li>
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
export default Footer;