import React, { Fragment } from "react";
import { Link } from "react-router-dom";



const HeaderAdmin = ({ nameValue }) => {
    return (
        <Fragment>
            <header className="header-admin">
                <h1 className="text-heading3">{nameValue}</h1>
                <div class="box-btn-header-admin">
                    <button class="btn-header-admin btn-icon"><img src="/assets/Icons/Sign-white.png" alt="" />Thêm</button>
                    <button class="btn-header-admin btn-icon"><img src="/assets/Icons/Recycle Bin.png" alt="" />Xóa</button>
                    <button class="btn-header-admin btn-icon"><img src="/assets/Icons/Change.png" alt="" />Sửa</button>
                </div>
                <div className="box-icon-header-admin">
                    <img src="/assets/Icons/Bell.png" alt="" />
                    <img src="/assets/Icons/List Dash.png" alt="" />
                    <Link to="/admin">
                        <img src="/assets/Icons/user-admin.png" alt="" />
                    </Link>
                </div>
            </header>
        </Fragment>
    )
}

export default HeaderAdmin;