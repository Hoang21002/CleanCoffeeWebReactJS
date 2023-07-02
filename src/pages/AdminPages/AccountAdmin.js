import React, { Fragment } from "react";


import SidebarAdmin from "../../components/admincompo/SidebarAdmin";
import HeaderAdmin from "../../components/admincompo/HeaderAdmin";

import AccountAdmin1 from "../../components/AccountAdmin1";


function AccountAdmin() {
    return (
        <Fragment>
            <div className="container-admin">
                <SidebarAdmin />
                <HeaderAdmin />    
                <AccountAdmin1 />    
            </div>
        </Fragment>
    )
}

export default AccountAdmin;