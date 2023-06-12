import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function SignIn() {
    return (
        <Fragment>
            <div className="sign-in">
                <div className="background-sign-in">

                </div>
                <div className="from-sign-in">
                    <h1 className="text-heading-login text-center text-heading2 text-thir-color">Đăng nhập</h1>
                    <h3 className="text-caption text-thir-color">Tài khoản</h3>
                    <input className="input-sign-in" type="text" placeholder="example@email.com" />
                    <h3 className="text-caption text-thir-color">Mật khẩu</h3>
                    <input className="input-sign-in" type="password" placeholder="Enter your password" />
                    <div className="box-get-pass">

                        <div className="box-remempass">
                            <input className="input-check-box-remem" type="checkbox" id="checkbox-remem" />
                            <label className="text-caption text-secon-color" for="checkbox-remem">Nhớ mật khẩu</label>
                        </div>

                        <Link to="/forgotpass" className="text-caption text-secon-color">Quên mật khẩu?</Link>
                    </div>
                    <button className="bnt-login-sign-in "><Link to="/account" className="text-common-lab text-main-color">Đăng nhập</Link></button>
                    <div className="box-icon-sign-in">
                        <img src="/assets/Icons/Google.png" alt="" />
                        <img src="/assets/Icons/Facebook.png" alt="" />
                        <img src="/assets/Icons/Twitter.png" alt="" />
                    </div>
                    <h3 className="text-center text-common-lab">Không có tài khoản?</h3>
                    <button className="btn-sign-up-sign-in "><Link to="/signup" className="text-common-lab text-secon-color">Đăng ký</Link></button>
                </div>
            </div>
        </Fragment>
    )
}
export default SignIn;