import React, { Fragment } from "react";


import SidebarAdmin from "../../components/admincompo/SidebarAdmin";
import HeaderAdmin from "../../components/admincompo/HeaderAdmin";

function VanchuyenAdmin() {
    const nameValue = "VẬN CHUYỂN";
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
                            <th class="text-body2">Đơn vị vận chuyển</th>
                            <th class="text-body2">Thời gian lấy hàng</th>
                            <th class="text-body2">Thời gian vận chuyển</th>
                            <th class="text-body2">Nơi nhận</th>
                            <th class="text-body2">Địa chỉ</th>
                            <th class="text-body2">Khối lượng</th>
                            <th class="text-body2">Trạng thái</th>
                        </tr>
                        <tr>
                            <td class="text-body2">MLA00123</td>
                            <td class="text-body2">Cafe sữa Milano </td>
                            <td class="text-body2">J&T Express</td>
                            <td class="text-body2">10:24
                                15/7/2023</td>
                            <td class="text-body2">8: 40
                                17/7/2023</td>
                            <td class="text-body2">Kho quản lý và phân phối Milano Sài Gòn</td>
                            <td class="text-body2">9 Đinh Tiên Hoàng, P5, Q.9, TP. HCM</td>
                            <td class="text-body2">300 bao * 10kg</td>
                            <td class="text-body2 td-done">Đã cập nhập</td>
                        </tr>
                        <tr>
                            <td class="text-body2">MLA00124</td>
                            <td class="text-body2">Cafe đen Milano </td>
                            <td class="text-body2">Viettel</td>
                            <td class="text-body2">6:45
                                1/8/2023</td>
                            <td class="text-body2">7: 50
                                2/8/2023</td>
                            <td class="text-body2">Kho quản lý và phân phối Milano Sài Gòn</td>
                            <td class="text-body2">3 Man Thiện, P.8, Q.9, TP. Thủ Đức</td>
                            <td class="text-body2">400 bao * 10kg</td>
                            <td class="text-body2 td-done">Đã cập nhập</td>
                        </tr>



                    </table>
                </div>
            </div>
        </Fragment>
    )
}

export default VanchuyenAdmin;