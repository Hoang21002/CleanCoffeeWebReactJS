import React, { Fragment } from "react";
import { Link } from "react-router-dom";


function Menu() {
    return (
        <Fragment>

            <header className="header">

                <nav className="nav">
                    <a className="menu-bnt"><i className=" fas fa-bars"></i></a>

                    <div className="nav-logo">
                        <Link className="nav-logo" to="/"><img src="assets/img/logo.png" alt="" />
                            <p>cleancoffee</p></Link>                        

                        {/* <a className="nav-logo" href="index.html"><img src="assets/img/logo.png" alt="" />
                            <p>cleancoffee</p>
                        </a> */}
                    </div>

                    <div className="nav-list">
                        <Link className="nav-item" to="/">Trang chủ</Link>                        
                        <Link className="nav-item" to="/khampha">Khám phá</Link>                        
                        <Link className="nav-item" to="/xephang">Xếp hạng</Link>                        
                        <Link className="nav-item" to="/about">Về chúng tôi</Link>          
                        <Link className="nav-item" to="/contact">Liên hệ</Link>
                    </div>
                    <div className="nav-login">
                        <img className="" src="assets/Icons/Language.png" alt="" />
                        <button>Đăng nhập</button>
                    </div>
                </nav>
            </header>
            {/* <!-- ------------------------------------HEADER----------------------------------------> */}

        </Fragment>
    )
}

export default Menu;