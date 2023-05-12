import React, { Fragment } from "react";
import Menu from "./Menu";

function Contact() {
    return (
        <Fragment>

            <Menu />
            {/* <!-- ------------------------------------CONTAINER----------------------------------------> */}
            <div className="container-contact">
                <div className="box-container-contact">
                    <div className="text-box-container-contact">
                        <h1 className="text-heading2 text-thir-color">LIÊN HỆ</h1>
                        <p className="text-body2 text-four-color">Chào các bạn thân mến, chúng tôi cảm thấy vô cùng vinh dự nếu các bạn gửi cho chúng tôi những phản hồi tích cực và những đóng góp của các bạn để giúp chúng tôi ngày một cải thiện website. Những đóng góp của bạn chính là những tài sản quý giá để chúng tôi tiếp tục hoàn thiện sứ mệnh là giúp cho người tiêu dùng Việt Nam hay cả ngoài nước cảm thấy an tâm khi sử dụng các sản phẩm cafe từ chính quê nhả của mình. </p>
                    </div>
                </div>
                <div className="box-container-request">
                    <div className="from-box-container-contact">
                        <h1 className="text-heading2 text-thir-color margin-bottom-40">Hãy gửi phản hồi của bạn</h1>
                        <div className="from-box-input-container-contact">
                            <h3 className="text-common-lab text-four-color">Email</h3>
                            <input className="input-contact-request" type="email" placeholder="Nhập địa chỉ email của bạn" />
                        </div>
                        <div className="from-box-input-container-contact">
                            <h3 className="text-common-lab text-four-color">Chủ đề</h3>
                            <input className="input-contact-request" type="text" placeholder="Chủ đề bạn muốn góp ý" />
                        </div>
                        <div className="from-box-input-container-contact">
                            <h3 className="text-common-lab text-four-color">Nội dung</h3>
                            <textarea  class="textarea-contact-request"  placeholder="Nội dung của bạn ..."></textarea>
                        </div>
                        <div className="box-button-contact">
                            <img src="/assets/Icons/Message.png" alt="" />
                            <button className="bnt-contact-request text-common-lab text-main-color" >Gửi tin nhắn cho chúng tôi</button>
                        </div>
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

export default Contact;