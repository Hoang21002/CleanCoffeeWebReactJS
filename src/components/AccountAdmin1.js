import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

function AccountAdmin1() {
    return (
        <Fragment>
            <div className="from-account">
                        <div className="from-heading-account">
                            <h1 className="text-heading3">TÀI KHOẢNG</h1>
                            <Link to="/signin"><img src="/assets/Icons/Sign Out.png" alt="" /></Link>

                        </div>
                        <div className="from-between-account">
                            <img src="/assets/img/useradmin.png" className="img-account" alt="" />
                            <div className="from-input-account">

                                <h3 className="text-caption text-thir-color">Tên nhà vận chuyển</h3>
                                <input type="text" className="input-account margin-bot-32" name="" value="Milano TP Hồ Chí Minh" id="" />
                                <h3 className="text-caption text-thir-color">Vai trò</h3>
                                <input type="text" className="input-account margin-bot-32" name="" value="Nhà sản xuất" id="" />
                                <h3 className="text-caption text-thir-color">Số điện thoại</h3>
                                <input type="text" className="input-account margin-bot-32" name="" value="0929 110 873" id="" />
                                <h3 className="text-caption text-thir-color">Email</h3>
                                <input type="text" className="input-account margin-bot-32" name="" value="milanohochiminh@gmail.com" id="" />
                                <h3 className="text-caption text-thir-color">Địa chỉ</h3>
                                <input type="text" className="input-account " name=""
                                    value="13 Hoang Van Thu, Phuong 1, Q. Tan Binh, TP. HCM" id="" />

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
export default AccountAdmin1;