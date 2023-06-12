import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function ChangePass() {
    return (
        <Fragment>
            <div class="forgot-pass">
                <div class="background-img-forgot-pass">

                </div>
                <div class="box-from-input-forgot-pass">
                    <div class="from-input-forgot-pass">
                        <img src="/assets/Icons/Key.png" alt="" class="margin-bot-48 head-icon" />
                        <h1 class="text-heading3 margin-bot-16 text-thir-color">Đặt lại mật khẩu</h1>
                        <h2 class="text-common-sub text-thir-color">Hãy đặt lại mật khẩu của bạn</h2>
                        <h3 class="text-caption margin-top-28 text-thir-color">Mật khẩu mới</h3>
                        <input class="input-forgot-pass margin-bot-16 margin-top-8" autofocus type="text" placeholder="Mật khẩu mới" />
                        <h3 class="text-caption text-thir-color">Nhập lại mật khẩu</h3>
                        <input class="input-forgot-pass margin-bot-48 margin-top-8" autofocus type="text" placeholder="Nhập lại mật khẩu mới" />
                        <button class="bnt-forgot-pass bnt-forgot-pass_submit text-main-color"><Link to="/success" class="text-main-color text-common-lab">Xác nhận</Link></button>
                        <button class="bnt-forgot-pass bnt-forgot-pass_back text-thirt-color"><Link to="/signin" class="text-four-color text-common-lab">Đăng nhập</Link></button>
                    </div>
                </div>

            </div>
        </Fragment>
    )
}
export default ChangePass;
