import React, { Fragment } from "react";


import SidebarAdmin from "../../components/admincompo/SidebarAdmin";
import HeaderAdmin from "../../components/admincompo/HeaderAdmin";

function ThumuaAdmin() {
    const nameValue = "THU MUA";
    return (
        <Fragment>
            <div className="container-admin">
                <SidebarAdmin />
                <HeaderAdmin nameValue={nameValue} />
                <div class="container-admin-thumua">
                    <table>
                        <tr>
                            <th class="text-body2">ID Sản phẩm</th>
                            <th class="text-body2">Hạt cafe</th>
                            <th class="text-body2">Địa điểm thu</th>
                            <th class="text-body2">Thời gian thu nhận</th>
                            <th class="text-body2">Thời gian đến nhà máy</th>
                            <th class="text-body2">Tên nhà máy</th>
                            <th class="text-body2">Địa chỉ</th>
                            <th class="text-body2">Khối lượng</th>
                            <th class="text-body2">Trạng thái</th>
                        </tr>
                        <tr>
                            <td class="text-body2">MLA00123</td>
                            <td class="text-body2">Arabica</td>
                            <td class="text-body2">Vườn Cafe Buôn Mê Thuột</td>
                            <td class="text-body2">11:00
                                1/12/2022</td>
                            <td class="text-body2">20:00
                                1/12/2022</td>
                            <td class="text-body2">Nhà máy chế biến cafe Tây Nguyên</td>
                            <td class="text-body2">9 Đinh Tiên Hoàng, P5, TP. Buôn Mê Thuột</td>
                            <td class="text-body2">100 bao * 10kg</td>
                            <td class="text-body2 td-done">Đã cập nhập</td>
                        </tr>
                        <tr>
                            <td class="text-body2">MLA00124</td>
                            <td class="text-body2">Rubusta</td>
                            <td class="text-body2">Vườn cafe Trại Hầm</td>
                            <td class="text-body2">23:00
                                5/12/2022</td>
                            <td class="text-body2">9:00
                                6/12/2022</td>
                            <td class="text-body2">Nhà máy chế biến cafe Lâm Hà</td>
                            <td class="text-body2">112 Nguyễn Hoàng, P9, TX. Lâm Hà</td>
                            <td class="text-body2">80 bao * 10kg</td>
                            <td class="text-body2 td-done">Đã cập nhập</td>
                        </tr>
                        



                    </table>
                </div>
            </div>
        </Fragment>
    )
}

export default ThumuaAdmin;