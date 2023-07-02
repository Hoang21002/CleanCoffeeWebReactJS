import React, { Fragment } from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

function TruyXuat() {
    return (
        <Fragment>
            <Menu />

            <div className="slider">
                <div className="slider-from">
                    <div className="slider-content">
                        <div className="slider-content-text">
                            <h1 className="text-heading2 text-thir-color">Cà Phê G7 hòa tan đen</h1>
                            <h2 className="text-heading4 text-four-color">Khối lượng tịnh</h2>
                            <p className="text-common-sub text-four-color">50g</p>
                            <h2 className="text-heading4 text-four-color">Ngày xuất xưởng</h2>
                            <p className="text-common-sub text-four-color">3/10/2023</p>
                            <h2 className="text-heading4 text-four-color">Loại cafe</h2>
                            <p className="text-common-sub text-four-color">Cafe hòa tan</p>
                            <h2 className="text-heading4 text-four-color">Nhà sản xuất</h2>
                            <p className="text-common-sub text-four-color">Trung Nguyên</p>
                            <h2 className="text-heading4 text-four-color">Sản xuất tại nhà máy cafe Buôn Mê Thuột</h2>
                            <p className="text-common-sub text-four-color">9 Đinh Tiên Hoàng, P5, TP. Buôn Mê Thuột</p>
                            <h2 className="text-heading4 text-four-color">Nhà phân phối</h2>
                            <p className="text-common-sub text-four-color">Siêu thị Big C Đà Nẵng</p>
                            <h2 className="text-heading4 text-four-color">Ngày mua hàng</h2>
                            <p className="text-common-sub text-four-color">8/9/2023</p>
                        </div>


                    </div>
                    <div className="slider-img">
                        <img className="hinhcaphe" src="assets/img/HomeImg (1).png" alt="" />
                    </div>
                </div>

            </div>
            {/* <!-- ------------------------------------SLIDER---------------------------------------->


            {/* <!-- ------------------------------------CONTAINER----------------------------------------> */}
            <div class="container-2">
                <h1 class="text-heading2 text-thir-color margin-bottom-40 text-center">QUÁ TRÌNH ĐẾN TAY NGƯỜI TIÊU DÙNG</h1>
                <div class="box-containr-2">
                    <div class="box-text-container-2">
                        <div class="box-title-text-container-2">
                            <h1 class="box-number text-heading4">1</h1>
                            <h1 class="text-heading4">Gieo hạt</h1>
                        </div>
                        <p class="text-italic text-body1">15/6/2022</p>
                        <p class="text-body1 margin-top-28">Quá trình gieo hạt cafe bắt đầu bằng việc chọn lựa các giống hạt cafe phù hợp với
                            vùng đất và điều kiện khí hậu. Sau đó, các hạt cafe được gieo vào đất và được tưới nước để kích
                            thích sự nảy mầm</p>
                    </div>
                    <div class="box-text-container-2">
                        <div class="box-title-text-container-2">
                            <h1 class="box-number text-heading4">2</h1>
                            <h1 class="text-heading4">Chăm sóc</h1>
                        </div>
                        <p class="text-italic text-body1 margin-bot-16">15/6/2022</p>
                        <p class="text-italic text-body1">15/7/2022</p>
                        <p class="text-body1 margin-top-28">Quá trình chăm sóc cây cafe bao gồm tưới nước, bón phân, cắt tỉa, phòng chống sâu
                            bệnh</p>
                    </div>
                    <div class="box-text-container-2">
                        <div class="box-title-text-container-2">
                            <h1 class="box-number text-heading4">3</h1>
                            <h1 class="text-heading4">Thu hoạch</h1>
                        </div>
                        <p class="text-italic text-body1">20/8/2022</p>
                        <p class="text-body1 margin-top-28">Cách thu hoạch thường là bằng tay hoặc sử dụng máy thu hoạch. Khi thu hoạch bằng
                            tay, người làm việc sẽ cầm dao cắt từng quả cafe một và đặt vào giỏ hoặc túi. Khi thu hoạch bằng
                            máy, máy sẽ đẩy các quả cafe từ cây xuống mặt đất và sau đó được thu gom lại</p>
                    </div>
                    <div class="box-text-container-2">
                        <div class="box-title-text-container-2">
                            <h1 class="box-number text-heading4">4</h1>
                            <h1 class="text-heading4">Chế biến</h1>
                        </div>
                        <p class="text-italic text-body1">5/9/2022</p>
                        <p class="text-body1 margin-top-28">Sau khi thu hoạch, quả cafe sẽ được tách hạt và sau đó rang để tạo ra hạt cà phê
                            nguyên chất. Quá trình rang cà phê cũng rất quan trọng để tạo ra hương vị và mùi thơm đặc trưng của
                            từng loại cà phê.</p>
                    </div>
                    <div class="box-text-container-2">
                        <div class="box-title-text-container-2">
                            <h1 class="box-number text-heading4">5</h1>
                            <h1 class="text-heading4">Vận chuyển</h1>
                        </div>
                        <p class="text-italic text-body1">1/10/2022</p>
                        <p class="text-body1 margin-top-28">Sau khi rang xong, hạt cà phê sẽ được sàng lọc để loại bỏ các mảnh vụn và hạt
                            không đều. Cuối cùng, hạt cà phê sẽ được đóng gói và gửi đi để bán cho người tiêu dùng.</p>
                    </div>
                    <div class="box-text-container-2">
                        <div class="box-title-text-container-2">
                            <h1 class="box-number text-heading4">6</h1>
                            <h1 class="text-heading4">Phân phối</h1>
                        </div>
                        <p class="text-italic text-body1">2/11/2022</p>
                        <p class="text-body1 margin-top-28">Đây là bước cuối cùng trước khi đến tay người tiêu dùng, những hàng hóa đã được
                            chế biến và đóng theo những sản phẩm khác nhau sẽ được đưa lên những nơi bán cafe.</p>
                    </div>
                </div>
            </div>
            {/* <!-- ------------------------------------CONTAINER----------------------------------------> */}
            {/* <!-- ------------------------------------FOOTER----------------------------------------> */}

            <Footer />

        </Fragment>
    )
}

export default TruyXuat;