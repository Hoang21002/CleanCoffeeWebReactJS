import React, { Fragment } from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

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
            <Footer />

        </Fragment>
    )
}

export default Contact;