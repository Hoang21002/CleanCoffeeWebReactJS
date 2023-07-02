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
                <Link to="/thumua">
                    <div className="box-text-nav-admin">
                        <img src="/assets/Icons/Purchase.png" alt="" />
                        <h3 className="text-common-lab">Thu mua</h3>
                    </div>
                </Link>
                <Link to="/chebien"><div className="box-text-nav-admin">
                <img src="/assets/Icons/Factory.png" alt="" />
                    <h3 className="text-common-lab">Chế biến</h3>
                </div></Link>
                <Link to="/vanchuyen"><div className="box-text-nav-admin">
                    <img src="/assets/Icons/Truck.png" alt="" />
                    <h3 className="text-common-lab">Vận chuyển</h3>
                </div></Link>
                <Link to="/phanphoi"><div className="box-text-nav-admin">
                    <img src="/assets/Icons/Supermarket.png" alt="" />
                    <h3 className="text-common-lab">Phân phối</h3>
                </div></Link>
            </nav>
        </Fragment>
    )
}

export default SidebarAdmin;