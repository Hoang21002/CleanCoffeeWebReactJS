import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function EnterCode() {
    return (
        <Fragment>
            <div class="forgot-pass">
                <div class="background-img-forgot-pass">

                </div>
                <div class="box-from-input-forgot-pass">
                    <div class="from-input-forgot-pass">
                        <img src="/assets/Icons/Key.png" class="margin-bot-48 head-icon" alt="" />
                        <h1 class="text-heading3 margin-bot-16 text-thir-color">Mã xác nhận</h1>
                        <h2 class="text-common-sub text-thir-color">Hãy nhập mã xác nhận đã gửi đến email của bạn</h2>
                        <h3 class="text-caption margin-top-28 text-thir-color">Mã xác nhận</h3>
                        <input class="input-forgot-pass  margin-top-4" autofocus type="email" placeholder="Nhập mã xác nhận" />
                        <h2 class="text-caption text-four-color margin-bottom-40 margin-top-8">Không nhận được mã ? <a href="" class="text-caption text-four-color text-unline">Gửi lại</a></h2>
                        <button class="bnt-forgot-pass bnt-forgot-pass_submit"><Link to="/changepass" class="text-main-color text-common-lab">Xác nhận</Link></button>
                        <button class="bnt-forgot-pass bnt-forgot-pass_back"><Link to="/singin" class="text-four-color text-common-lab">Đăng nhập</Link></button>


                    </div>
                </div>

            </div>
        </Fragment>
    )
}
export default EnterCode;
