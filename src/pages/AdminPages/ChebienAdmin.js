import React, { Fragment } from "react";


import SidebarAdmin from "../../components/admincompo/SidebarAdmin";
import HeaderAdmin from "../../components/admincompo/HeaderAdmin";

function ChebienAdmin() {
    const nameValue = "CHẾ BIẾN";
    return (
        <Fragment>
            <div className="container-admin">
                <SidebarAdmin />
                <HeaderAdmin nameValue={nameValue} />
                <div class="container-admin-thumua">
                    <table>
                        <tr>
                            <th class="text-body2">ID Sản phẩm</th>
                            <th class="text-body2">Tên sản phẩm</th>
                            <th class="text-body2">Thời gian chế biến</th>
                            <th class="text-body2">Thời gian hoàn thành</th>
                            <th class="text-body2">Thời gian đóng gói</th>
                            <th class="text-body2">Thời gian xuất xưởng</th>
                            <th class="text-body2">Khối lượng</th>
                            <th class="text-body2">Trạng thái</th>
                        </tr>
                        <tr>
                            <td class="text-body2">MLA00123</td>
                            <td class="text-body2">Cafe sữa Milano </td>
                            <td class="text-body2">9:00
                                3/12/2023 </td>
                            <td class="text-body2">17:00
                                7/4/2023</td>
                            <td class="text-body2">20:00
                                21/5/2023</td>
                            <td class="text-body2">9:35
                                7/7/2023</td>
                            <td class="text-body2">100 thùng * 10kg</td>

                            <td class="text-body2 td-done">Đã cập nhập</td>
                        </tr>
                        <tr>
                            <td class="text-body2">MLA00124</td>
                            <td class="text-body2">Cafe sữa Milano </td>
                            <td class="text-body2">14:15
                                9/12/2023</td>
                            <td class="text-body2">16:45
                                5/5/2023</td>
                            <td class="text-body2">21:00
                                19/6/2023</td>
                            <td class="text-body2">8:35
                                23/7/2023</td>
                            <td class="text-body2">100 thùng * 5kg</td>

                            <td class="text-body2 td-done">Đã cập nhập</td>
                        </tr>
                        



                    </table>
                </div>
            </div>
        </Fragment>
    )
}

export default ChebienAdmin;