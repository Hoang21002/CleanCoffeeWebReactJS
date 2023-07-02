import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

function Account() {
    return (
        <Fragment>
            <div className="from-account">
                        <div className="from-heading-account">
                            <h1 className="text-heading3">TÀI KHOẢN</h1>
                            <Link to="/signin"><img src="/assets/Icons/Sign Out.png" alt="" /></Link>

                        </div>
                        <div className="from-between-account">
                            <img src="/assets/img/img-account.png" className="img-account" alt="" />
                            <div className="from-input-account">

                                <h3 className="text-caption text-thir-color">Họ và tên</h3>
                                <input type="text" className="input-account margin-bot-32" name="" value="Lê Minh Thành" id="" readonly />
                                <h3 className="text-caption text-thir-color">Vai trò</h3>
                                <input type="text" className="input-account margin-bot-32" name="" value="Người dùng" id="" />
                                <h3 className="text-caption text-thir-color">Số điện thoại</h3>
                                <input type="text" className="input-account margin-bot-32" name="" value="0373 174 980" id="" />
                                <h3 className="text-caption text-thir-color">Email</h3>
                                <input type="text" className="input-account margin-bot-32" name="" value="leminhthanh@gmail.com" id="" />
                                <h3 className="text-caption text-thir-color">Địa chỉ</h3>
                                <input type="text" className="input-account " name=""
                                    value="10 Lê Đức Thọ, Phường 12, Tp. Buôn Mê Thuột, Dak..." id="" />

                            </div>
                        </div>
                        <div className="from-end-account">
                            <button className="btn-icon bnt-upload-account text-common-lab text-four-color"><img
                                src="/assets/Icons/Upload.png" alt="" />Cập nhập ảnh đại diện</button>
                            <div className="box-button-account">
                                <button className="btn-icon bnt-edit-save-account"><img src="/assets/Icons/Change.png" alt="" />Chỉnh
                                    sửa</button>
                                <button className="btn-icon bnt-edit-save-account"><img src="/assets/Icons/Bookmark.png"
                                    alt="" />Lưu</button>
                            </div>
                        </div>
                    </div>
        </Fragment>
    )
}
export default Account;