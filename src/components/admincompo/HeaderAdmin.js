import React, { Fragment } from "react";



function HeaderAdmin() {
    return (
        <Fragment>
            <header className="header-admin">
                <h1>Đăng ký sản phẩm</h1>
                <div class="box-btn-header-admin">
                    <button class="btn-header-admin btn-icon"><img src="/assets/Icons/Sign-white.png" alt="" />Thêm</button>
                    <button class="btn-header-admin btn-icon"><img src="/assets/Icons/Recycle Bin.png" alt="" />Xóa</button>
                    <button class="btn-header-admin btn-icon"><img src="/assets/Icons/Change.png" alt="" />Sửa</button>
                </div>
                <div className="box-icon-header-admin">
                    <img src="/assets/Icons/Bell.png" alt="" />
                    <img src="/assets/Icons/List Dash.png" alt="" />
                    <img src="/assets/Icons/user-admin.png" alt="" />
                </div>
            </header>
        </Fragment>
    )
}

export default HeaderAdmin;