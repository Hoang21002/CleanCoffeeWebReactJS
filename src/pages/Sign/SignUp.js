import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function SignUp() {
    return (
        <Fragment>
            <div  className="sign-up">
                <div  className="from-sign-up">

                    <h1  className="text-heading2 heading-text-sign-up text-thir-color">Đăng ký</h1>

                    <h3  className="text-caption text-thir-color">Bạn là ?</h3>
                    <select  className="input-sign-up" name="" id="" placeholder="Nông dân">
                        <option value="php">Nông dân</option>
                        <option value="python">Nhà phân phối</option>
                        <option value="js">Nhà vận chuyển</option>
                        <option value="rupy">Người tiêu dùng</option>
                    </select>

                    <h3  className="text-caption text-thir-color">Họ và tên</h3>
                    <input  className="input-sign-up" type="text" placeholder="Nhập họ và tên đầy đủ của bạn" />

                    <h3  className="text-caption text-thir-color">Email</h3>
                    <input  className="input-sign-up" type="email" placeholder="viduemail@email.com" />

                    <h3  className="text-caption text-thir-color">Số điện thoại</h3>
                    <input  className="input-sign-up" type="number" placeholder="Nhập số điện thoại của bạn" />

                    <h3  className="text-caption text-thir-color">Country</h3>
                    <div  className="box-select-sign-up">
                        <select  className="input-sign-up" name="" id="">
                            <option  className="text-center text-common-lab" value="php">Tỉnh</option>
                            <option value="python">python</option>
                            <option value="js">js</option>
                            <option value="rupy">rupy</option>
                            <option value="java">java</option>
                        </select>
                        <select  className="input-sign-up" name="" id="">
                            <option  className="text-center text-common-lab" value="php">Thành Phố</option>
                            <option value="python">python</option>
                            <option value="js">js</option>
                            <option value="rupy">rupy</option>
                            <option value="java">java</option>
                        </select>
                        <select  className="input-sign-up" name="" id="">
                            <option  className="text-center text-common-lab" value="php">Phường</option>
                            <option value="python">python</option>
                            <option value="js">js</option>
                            <option value="rupy">rupy</option>
                            <option value="java">java</option>
                        </select>
                        <input  className="input-sign-up text-center" type="text" placeholder="Số nhà" />
                    </div>

                    <h3  className="text-common-lab text-thir-color">Mật khẩu</h3>
                    <input  className="input-sign-up" type="text" placeholder="Ít nhất 8 ký tự bao gồm 1 ký tự viết hoa" />

                    <h3  className="text-common-lab text-thir-color">Nhập lại mật khẩu</h3>
                    <input  className="input-sign-up" type="text" placeholder="Vui lòng nhập lại mật khẩu chính xác" />

                    <button  className="text-common-lab text-main-color bnt-sign-up">Đăng ký</button>
                    <h3  className="text-common-lab text-center text-thirt-color">Đã có tài khoản ?</h3>
                    <button  className=" btn-sign-in"><Link to="/signin" className="text-common-lab">Đăng nhập</Link></button>

                </div>
                <div  className="background-img-sign-up">

                </div>
            </div>
        </Fragment>
    )
}
export default SignUp;
