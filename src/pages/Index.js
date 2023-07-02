import React, { Fragment } from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

function Index() {
    return (
        <Fragment>
            <Menu />
            {/* <!-- ------------------------------------SLIDER----------------------------------------> */}
            <div className="slider-xephang">
                <video src="/assets/video/TrailerCoffee.mp4" autoPlay={"autoplay"} muted loop ></video>
                <div className="slider-xephang-text">
                    <h3 className="text-main-color wow animate__animated animate__fadeInLeft animate__delay-0.4s slider-xephang-text-1">Chào mừng bạn đến với truyxuatcafe.com.vn</h3>
                    <h1 className="text-main-color wow animate__animated animate__fadeInLeft animate__delay-0.4s slider-xephang-text-2">CÀ PHÊ SẠCH TUYÊN <br /> CHIẾN VỚI CÀ PHÊ BẨN. </h1>
                    <p className="text-main-color wow animate__animated animate__fadeInLeft animate__delay-0.4s slider-xephang-text-3">Hãy cùng website khám phá những thức uống cafe của Việt Nam</p>
                    <div className="box-button-trangchu wow animate__animated animate__fadeInLeft animate__delay-0.4s">
                        <button className="text-thir-color slider-xephang-bnt">Khám phá</button>
                        <div className="btn-input">
                            <img className="input-code-trangchu" src="/assets/Icons/Code.png" alt="" />
                            <input type="text" placeholder="Nhập mã sản phẩm" className="text-thir-color input-code-trangchu" />
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="slider">
                <div className="slider-from">
                    <div className="slider-content">
                        <div className="slider-content-text">

                            <span className="text-thir-color">Sản Phẩm</span>
                            <h1 className="text-four-color">Cà Phê G7 hòa tan đen</h1>
                            <p className="text-thir-color">Khối lượng tịnh: 50g</p>
                            <p className="text-thir-color">Ngày xuất xưởng: 3/10/2023</p>
                            <p className="text-thir-color">Loại cafe: Cafe hòa tan</p>
                            <h4 className="text-thir-color">Sản phẩm chính hãng</h4>
                            <h3 className="text-thir-color">Chứng nhận bởi Cục an toàn Thực Phẩm</h3>
                        </div>


                    </div>
                    <div className="slider-img">
                        <img className="hinhcaphe" src="assets/img/HomeImg (1).png" alt="" />
                    </div>
                </div>

            </div> */}
            {/* <!-- ------------------------------------SLIDER----------------------------------------> */}


            {/* <!-- ------------------------------------CONTAINER----------------------------------------> */}
            <div className="container">
                <div className="box-text-container wow animate__animated animate__fadeInLeft ">
                    <h1 className="text-heading2 text-thir-color margin-bot-60 ">VÌ SAO NÊN DÙNG ỨNG DỤNG <br/> TRUY XUẤT
                        NGUỒN GỐC CAFE ?
                    </h1>
                    <p className="text-heading4 text-four-color margin-bot-48">1. Ngăn ngừa sản phẩm giả, kém chất lượng.</p>
                    <p className="text-heading4 text-four-color margin-bot-48">2. Chất lượng được kiểm định bởi cục An Toàn Thực
                        Phẩm.</p>
                    <p className="text-heading4 text-four-color margin-bot-48">3. Tăng sự tin tưởng cho người tiêu dùng</p>
                    <p className="text-heading4 text-four-color">4. Giúp nâng cao vị thế sản phẩm của các doanh nghiệp Việt trong
                        lòng người tiêu dùng Việt </p>
                </div>
                <div className="box-text-container wow animate__animated animate__fadeInRight">
                    <img src="/assets/img/img-trangchu.png" alt="" />
                </div>
            </div>
            <div className="container-2">
                <h1 className="text-heading2 text-thir-color margin-bottom-40 wow animate__animated animate__fadeInLeft animate__delay-0.4s">QUÁ TRÌNH TRUY XUẤT</h1>
                <div className="box-containr-2 wow animate__animated animate__fadeInUp animate__delay-0.4s">
                    <div className="box-text-container-2 ">
                        <div className="box-title-text-container-2">
                            <h1 className="box-number text-heading4">1</h1>
                            <h1 className="text-heading4">Gieo hạt</h1>
                        </div>
                        <p className="text-body1">Quá trình gieo hạt cafe bắt đầu bằng việc chọn lựa các giống hạt cafe phù hợp với
                            vùng đất và điều kiện khí hậu. Sau đó, các hạt cafe được gieo vào đất và được tưới nước để kích
                            thích sự nảy mầm</p>
                    </div>
                    <div className="box-text-container-2">
                        <div className="box-title-text-container-2">
                            <h1 className="box-number text-heading4">2</h1>
                            <h1 className="text-heading4">Chăm sóc</h1>
                        </div>
                        <p className="text-body1">Quá trình chăm sóc cây cafe bao gồm tưới nước, bón phân, cắt tỉa, phòng chống sâu
                            bệnh</p>
                    </div>
                    <div className="box-text-container-2">
                        <div className="box-title-text-container-2">
                            <h1 className="box-number text-heading4">3</h1>
                            <h1 className="text-heading4">Thu hoạch</h1>
                        </div>
                        <p className="text-body1">Cách thu hoạch thường là bằng tay hoặc sử dụng máy thu hoạch. Khi thu hoạch bằng
                            tay, người làm việc sẽ cầm dao cắt từng quả cafe một và đặt vào giỏ hoặc túi. Khi thu hoạch bằng
                            máy, máy sẽ đẩy các quả cafe từ cây xuống mặt đất và sau đó được thu gom lại</p>
                    </div>
                    <div className="box-text-container-2">
                        <div className="box-title-text-container-2">
                            <h1 className="box-number text-heading4">4</h1>
                            <h1 className="text-heading4">Chế biến</h1>
                        </div>
                        <p className="text-body1">Sau khi thu hoạch, quả cafe sẽ được tách hạt và sau đó rang để tạo ra hạt cà phê
                            nguyên chất. Quá trình rang cà phê cũng rất quan trọng để tạo ra hương vị và mùi thơm đặc trưng của
                            từng loại cà phê.</p>
                    </div>
                    <div className="box-text-container-2">
                        <div className="box-title-text-container-2">
                            <h1 className="box-number text-heading4">5</h1>
                            <h1 className="text-heading4">Vận chuyển</h1>
                        </div>
                        <p className="text-body1">Sau khi rang xong, hạt cà phê sẽ được sàng lọc để loại bỏ các mảnh vụn và hạt
                            không đều. Cuối cùng, hạt cà phê sẽ được đóng gói và gửi đi để bán cho người tiêu dùng.</p>
                    </div>
                    <div className="box-text-container-2">
                        <div className="box-title-text-container-2">
                            <h1 className="box-number text-heading4">6</h1>
                            <h1 className="text-heading4">Phân phối</h1>
                        </div>
                        <p className="text-body1">Đây là bước cuối cùng trước khi đến tay người tiêu dùng, những hàng hóa đã được
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

export default Index;