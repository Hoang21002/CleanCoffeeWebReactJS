import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Success() {
    return (
        <Fragment>
<div class="forgot-pass">
    <div class="background-img-forgot-pass">

    </div>
    <div class="box-from-input-forgot-pass">
        <div class="from-input-forgot-pass">
            <img src="/assets/Icons/Checked.png" class="margin-bottom-40 head-icon" alt=""/>
            <h1 class="text-heading3 text-thir-color">Thành công!</h1>
            <h2 class="text-common-sub margin-top-28 text-four-color">Mật khẩu của bạn đã cài đặt thành công!</h2>           
            <button class="bnt-forgot-pass bnt-forgot-pass_submit margin-top-28 btn-icon"><img src="/assets/Icons/ArrowLeft-White.png" alt=""/><Link to="/signin" class="text-main-color">Đăng nhập</Link></button>
            
        </div>
    </div>

</div>
        </Fragment>
    )
}
export default Success;
