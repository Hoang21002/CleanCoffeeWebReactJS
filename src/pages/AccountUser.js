import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";
import Account from "../components/Account";

function AccountUser() {
    return (
        <Fragment>
            <Menu />
            <div className="account">
                <div className="box-account">
                    <Account />
                </div>
            </div>
        </Fragment>
    )
}
export default AccountUser;