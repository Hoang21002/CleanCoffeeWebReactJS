import React, { Fragment } from "react";


import SidebarAdmin from "../../components/admincompo/SidebarAdmin";
import HeaderAdmin from "../../components/admincompo/HeaderAdmin";

function PhanphoiAdmin() {
    const nameValue = "PHÂN PHỐI";
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
                            <th class="text-body2">Thời gian đến nơi</th>
                            <th class="text-body2">Thời gian lên kệ</th>
                            <th class="text-body2">Nơi phân phối</th>
                            <th class="text-body2">Khối lượng đã vận chuyển đến</th>
                            <th class="text-body2">Khối lượng phân phối</th>
                            <th class="text-body2">Trạng thái</th>
                        </tr>
                        <tr>
                            <td class="text-body2">MLA00123</td>
                            <td class="text-body2">Cafe sữa Milano </td>
                            <td class="text-body2">9:43
                                19/7/2023</td>
                            <td class="text-body2">10:24
                                21/7/2023</td>
                            <td class="text-body2">Siêu thị Big C Đà Nẵng</td>
                            <td class="text-body2">100 bao *10kg</td>
                            <td class="text-body2">50 bịch * 2 kg</td>

                            <td class="text-body2 td-done">Đã cập nhập</td>
                        </tr>
                        <tr>
                            <td class="text-body2">MLA00124</td>
                            <td class="text-body2">Cafe đen Mialno</td>
                            <td class="text-body2">9: 32
                                5/8/2023</td>
                            <td class="text-body2">20:32
                                8/8/2023</td>
                            <td class="text-body2">Circle K Quận 9</td>
                            <td class="text-body2">80 thùng * 10kg</td>
                            <td class="text-body2">20 bịch * 2 kg</td>

                            <td class="text-body2 td-load">Chưa cập nhập</td>
                        </tr>



                    </table>
                </div>
            </div>
        </Fragment>
    )
}

export default PhanphoiAdmin;