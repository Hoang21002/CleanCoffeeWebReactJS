import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function ForgotPass() {
    return (
        <Fragment>
            <div class="forgot-pass">
                <div class="background-img-forgot-pass">

                </div>
                <div class="box-from-input-forgot-pass">
                    <div class="from-input-forgot-pass">
                        <img src="/assets/Icons/Key.png" class="margin-bot-48 head-icon" alt="" />
                        <h1 class="text-heading3 margin-bot-16 text-thir-color">Quên mật khẩu</h1>
                        <h2 class="text-common-sub text-thir-color">Vui lòng nhập địa chỉ email của bạn </h2>
                        <h3 class="text-caption margin-top-28 text-thir-color">Email</h3>
                        <input class="input-forgot-pass margin-bottom-40 margin-top-4" autofocus type="email" placeholder="Email khôi phục" />
                        <button class="bnt-forgot-pass bnt-forgot-pass_submit"><Link to="/entercode" class="text-main-color text-common-lab">Xác nhận</Link></button>
                        <button class="bnt-forgot-pass bnt-forgot-pass_back"><Link to="/singin" class="text-four-color text-common-lab">Đăng nhập</Link></button>
                    </div>
                </div>

            </div>
        </Fragment>
    )
}
export default ForgotPass;
