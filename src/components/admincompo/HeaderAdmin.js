import React, { Fragment } from "react";



function HeaderAdmin() {
    return (
        <Fragment>
            <header className="header-admin">
                <h1>Đăng ký sản phẩm</h1>
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