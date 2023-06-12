import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

function Account() {
    return (
        <Fragment>
            <Menu />
            <div class="account">
                <div class="box-account">
                    <div class="from-account">
                        <div class="from-heading-account">
                            <h1 class="text-heading3">TÀI KHOẢNG</h1>
                            <Link to="/signin"><img src="/assets/Icons/Sign Out.png" alt="" /></Link>

                        </div>
                        <div class="from-between-account">
                            <img src="/assets/img/img-account.png" class="img-account" alt="" />
                            <div class="from-input-account">

                                <h3 class="text-caption text-thir-color">Họ và tên</h3>
                                <input type="text" class="input-account margin-bot-32" name="" placeholder="Lê Minh Thành" id="" />
                                <h3 class="text-caption text-thir-color">Họ và tên</h3>
                                <input type="text" class="input-account margin-bot-32" name="" placeholder="Người dùng" id="" />
                                <h3 class="text-caption text-thir-color">Họ và tên</h3>
                                <input type="text" class="input-account margin-bot-32" name="" placeholder="0373 174 980" id="" />
                                <h3 class="text-caption text-thir-color">Họ và tên</h3>
                                <input type="text" class="input-account margin-bot-32" name="" placeholder="leminhthanh@gmail.com" id="" />
                                <h3 class="text-caption text-thir-color">Họ và tên</h3>
                                <input type="text" class="input-account " name=""
                                    placeholder="10 Lê Đức Thọ, Phường 12, Tp. Buôn Mê Thuột, Dak..." id="" />

                            </div>
                        </div>
                        <div class="from-end-account">
                            <button class="btn-icon bnt-upload-account text-common-lab text-four-color"><img
                                src="/assets/Icons/Upload.png" alt="" />Cập nhập ảnh đại diện</button>
                            <div class="box-button-account">
                                <button class="btn-icon bnt-edit-save-account"><img src="/assets/Icons/Change.png" alt="" />Chỉnh
                                    sửa</button>
                                <button class="btn-icon bnt-edit-save-account"><img src="/assets/Icons/Bookmark.png"
                                    alt="" />Lưu</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Fragment>
    )
}
export default Account;