import React, { Fragment } from "react";


import SidebarAdmin from "../../components/admincompo/SidebarAdmin";
import HeaderAdmin from "../../components/admincompo/HeaderAdmin";
import Account from "../../components/Account";


function AccountAdmin() {
    return (
        <Fragment>
            <div className="container-admin">
                <SidebarAdmin />
                <HeaderAdmin />    
                <Account />    
            </div>
        </Fragment>
    )
}

export default AccountAdmin;