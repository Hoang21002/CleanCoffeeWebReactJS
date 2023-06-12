import React, { Fragment } from "react";
import { Link } from "react-router-dom";


function SidebarAdmin() {
    return (
        <Fragment>
            <nav className="nav-admin">
                <div className="nav-logo-admin">
                    <Link className="nav-logo-admin" to="/"><img src="/assets/img/logo.png" alt="" />
                        <p className="text-logo">cleancoffee</p>
                    </Link>
                </div>
                <div className="box-text-nav-admin">
                    <img src="/assets/Icons/Sign.png" alt="" />
                    <h3 className="text-common-lab">Đăng ký sản phầm</h3>
                </div>
                <div className="box-text-nav-admin">
                    <img src="/assets/Icons/Procedure.png" alt="" />
                    <h3 className="text-common-lab">Quy trình chăm sóc</h3>
                </div>
                <div className="box-text-nav-admin">
                    <img src="/assets/Icons/Harvest.png" alt="" />
                    <h3 className="text-common-lab">Thu hoạch</h3>
                </div>
            </nav>
        </Fragment>
    )
}

export default SidebarAdmin;