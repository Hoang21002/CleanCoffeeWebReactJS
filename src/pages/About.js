import React, { Fragment } from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";


function About() {
    return (
        <Fragment>
            <Menu />

            {/* <!-- ------------------------------------SLIDER----------------------------------------> */}
            <div className="slider-about">
                <div className="slider-content-about">
                    <div className="slider-top-bot-about ">
                        <img className="img-slider-about" src="/assets/img/SliderAbout (2).png" alt="" />
                    </div>

                    <div className="slider-top-bot-about ">
                        <div className="text-slider-about">

                            <h1 className="text-thir-color heading-slider-about">Chúng tôi là ai?</h1>
                            <p className="text-four-color title-slider-about">Đây là trang web truy xuất nguồn gốc cà phê, tại đây bạn có thể xem từ
                                quá trình đầu tiên là gieo trồng cho đến khi thu hoạch., tiếp đến là công đoạn vận chuyển và
                                phânphối đến tay người tiêu dùng. <br></br>

                                Mục đích của trang Web này là để người tiêu dùng có thể kiểm định được nguồn gốc sản xuất của
                                những sản phầm cà phê, điều nàygiúp cho người tiêu dùng cảm thấy an tâm khi sử dụng sản phẩm.
                            </p>
                        </div>
                    </div>

                </div>

                <div className="slider-content-about">
                    <div className="slider-top-bot-about ">
                        <div className="text-slider-about">
                            <h1 className="text-thir-color heading-slider-about">Website này có thể giúp ích bạn được gì?</h1>
                            <p className="text-four-color title-slider-about">Hiện nay, trên thị trường có nhiều loại cafe không được đảm bảo chất
                                lượng đang tồn tại trên thị trường. Với việc xã hội ngày càng phát triển và người tiêu dùng càng
                                ngày càng khắc khe về chất lượng sản phầm. Chính Website truy xuât nguồn gốc cà phê này là lựa
                                chọn hàng đầu để người dùng có thể truy xuất sản phẩm từ lúc hạt cà phê được gieo trồng bời
                                những người nông dân cho đến khi có trên mặt hàng các nơi được bày bán.</p>
                        </div>
                    </div>

                    <div className="slider-top-bot-about ">
                        <img className="img-slider-about" src="/assets/img/SliderAbout (1).png" alt="" />
                    </div>


                </div>
            </div>
            {/* <!-- ------------------------------------SLIDER----------------------------------------> */}

            {/* <!-- ------------------------------------CONTAINER----------------------------------------> */}
            <div className="container-about">
                {/* <!-- ---------------------------------------SERVICE ABOUT--------------------------- --> */}
                <div className="container-service-about">
                    <h1 className="text-thir-color header-container-about">DỊCH VỤ CỦA CHÚNG TÔI</h1>
                    <div className="cards-service-about">
                        <div className="card-service-about">
                            <div className="card-top-service-about">
                                <img className="img-card-service-about" src="/assets/img/ServiceAboutImg (1).png" alt="" />
                            </div>
                            <div className="card-bot-service-about">
                                <h2 className="heading-card-service-about">Truy xuất cà phê</h2>
                                <p className="title-card-service-about">Truy xuất nguồn gốc cà phê để giúp cho người dùng an tâm về
                                    chất lượng sản phẩm.</p>
                            </div>
                        </div>

                        <div className="card-service-about">
                            <div className="card-top-service-about">
                                <img className="img-card-service-about" src="/assets/img/ServiceAboutImg (2).png" alt="" />
                            </div>
                            <div className="card-bot-service-about">
                                <h2 className="heading-card-service-about">Truy xuất cà phê</h2>
                                <p className="title-card-service-about">Truy xuất nguồn gốc cà phê để giúp cho người dùng an tâm về
                                    chất lượng sản phẩm.</p>
                            </div>
                        </div>
                    </div>
                    <div className="cards-service-about">
                        <div className="card-service-about">
                            <div className="card-top-service-about">
                                <img className="img-card-service-about" src="/assets/img/ServiceAboutImg (3).png" alt="" />
                            </div>
                            <div className="card-bot-service-about">
                                <h2 className="heading-card-service-about">Truy xuất cà phê</h2>
                                <p className="title-card-service-about">Truy xuất nguồn gốc cà phê để giúp cho người dùng an tâm về
                                    chất lượng sản phẩm.</p>
                            </div>
                        </div>

                        <div className="card-service-about">
                            <div className="card-top-service-about">
                                <img className="img-card-service-about" src="/assets/img/ServiceAboutImg (4).png" alt="" />
                            </div>
                            <div className="card-bot-service-about">
                                <h2 className="heading-card-service-about">Truy xuất cà phê</h2>
                                <p className="title-card-service-about">Truy xuất nguồn gốc cà phê để giúp cho người dùng an tâm về
                                    chất lượng sản phẩm.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ---------------------------------------SERVICE ABOUT--------------------------- --> */}




                {/* <!-- ---------------------------------------FOUDER ABOUT--------------------------- --> */}

                <div className="container-founder-about">
                    <h1 className="text-thir-color header-container-about">NHÀ SÁNG LẬP</h1>
                    <div className="cards-founder-about">
                        <div className="card-founder-about">
                            <img className="img-card-founder-about" src="/assets/img/FounderAboutImg (4).png" alt="" />
                            <h1 className="name-founder-card-about">Đoàn Đình Hoàng</h1>
                            <p className="title-founder-card-about">Trưởng phòng Công nghệ</p>
                        </div>

                        <div className="card-founder-about">
                            <img className="img-card-founder-about" src="/assets/img/FounderAboutImg (3).png" alt="" />
                            <h1 className="name-founder-card-about">Đoàn Đình Hoàng</h1>
                            <p className="title-founder-card-about">Trưởng phòng Công nghệ</p>
                        </div>

                        <div className="card-founder-about">
                            <img className="img-card-founder-about" src="/assets/img/FounderAboutImg (2).png" alt="" />
                            <h1 className="name-founder-card-about">Đoàn Đình Hoàng</h1>
                            <p className="title-founder-card-about">Trưởng phòng Công nghệ</p>
                        </div>

                        <div className="card-founder-about">
                            <img className="img-card-founder-about" src="/assets/img/FounderAboutImg (1).png" alt="" />
                            <h1 className="name-founder-card-about">Đoàn Đình Hoàng</h1>
                            <p className="title-founder-card-about">Trưởng phòng Công nghệ</p>
                        </div>
                    </div>
                </div>

                {/* <!-- ---------------------------------------FOUDER ABOUT--------------------------- --> */}




                {/* <!-- ---------------------------------------FEEDBACK ABOUT--------------------------- --> */}

                <div className="container-feedback-about">
                    <h1 className="text-thir-color header-container-about">NGƯỜI DÙNG NÓI GÌ ?</h1>
                    <div className="cards-feedback-about">
                        <div className="card-feedback-about">

                            <div className="card-feedback-about-user">

                                <div className="from-img-user-feedback-about">
                                    <img className="img-user-feedback-about" src="/assets/img/EllipseAboutImg  (5).png" alt="" />
                                </div>

                                <div className="from-name-user-feedback-about">
                                    <h1 className="name-user-feedback-about">Chế Thị Hoài</h1>
                                    <h3 className="job-user-feedback-about">Nội trợ</h3>
                                </div>

                            </div>
                            <p className="title-feedback-about">Từ ngày trang web hiện ra mình đã cực kỳ an tâm về sản phẩm có liên quan đến cafe mà mình tin dùng cho cả nhà mình. Cám ơn các bạn nhiều lắm.</p>


                        </div>

                        <div className="card-feedback-about">

                            <div className="card-feedback-about-user">

                                <div className="from-img-user-feedback-about">
                                    <img className="img-user-feedback-about" src="/assets/img/EllipseAboutImg  (6).png" alt="" />
                                </div>

                                <div className="from-name-user-feedback-about">
                                    <h1 className="name-user-feedback-about">Chế Thị Hoài</h1>
                                    <h3 className="job-user-feedback-about">Nội trợ</h3>
                                </div>

                            </div>
                            <p className="title-feedback-about">Từ ngày trang web hiện ra mình đã cực kỳ an tâm về sản phẩm có liên quan đến cafe mà mình tin dùng cho cả nhà mình. Cám ơn các bạn nhiều lắm.</p>


                        </div>

                        <div className="card-feedback-about">

                            <div className="card-feedback-about-user">

                                <div className="from-img-user-feedback-about">
                                    <img className="img-user-feedback-about" src="/assets/img/EllipseAboutImg  (7).png" alt="" />
                                </div>

                                <div className="from-name-user-feedback-about">
                                    <h1 className="name-user-feedback-about">Chế Thị Hoài</h1>
                                    <h3 className="job-user-feedback-about">Nội trợ</h3>
                                </div>

                            </div>
                            <p className="title-feedback-about">Từ ngày trang web hiện ra mình đã cực kỳ an tâm về sản phẩm có liên quan đến cafe mà mình tin dùng cho cả nhà mình. Cám ơn các bạn nhiều lắm.</p>


                        </div>

                        <div className="card-feedback-about">

                            <div className="card-feedback-about-user">

                                <div className="from-img-user-feedback-about">
                                    <img className="img-user-feedback-about" src="/assets/img/EllipseAboutImg  (8).png" alt="" />
                                </div>

                                <div className="from-name-user-feedback-about">
                                    <h1 className="name-user-feedback-about">Chế Thị Hoài</h1>
                                    <h3 className="job-user-feedback-about">Nội trợ</h3>
                                </div>

                            </div>
                            <p className="title-feedback-about">Từ ngày trang web hiện ra mình đã cực kỳ an tâm về sản phẩm có liên quan đến cafe mà mình tin dùng cho cả nhà mình. Cám ơn các bạn nhiều lắm.</p>


                        </div>

                        <div className="card-feedback-about">

                            <div className="card-feedback-about-user">

                                <div className="from-img-user-feedback-about">
                                    <img className="img-user-feedback-about" src="/assets/img/EllipseAboutImg  (9).png" alt="" />
                                </div>

                                <div className="from-name-user-feedback-about">
                                    <h1 className="name-user-feedback-about">Chế Thị Hoài</h1>
                                    <h3 className="job-user-feedback-about">Nội trợ</h3>
                                </div>

                            </div>
                            <p className="title-feedback-about">Từ ngày trang web hiện ra mình đã cực kỳ an tâm về sản phẩm có liên quan đến cafe mà mình tin dùng cho cả nhà mình. Cám ơn các bạn nhiều lắm.</p>


                        </div>
                    </div>

                </div>


                {/* <!-- ---------------------------------------FEEDBACK ABOUT--------------------------- --> */}




                {/* <!-- ---------------------------------------CONTACT ABOUT--------------------------- --> */}

                <div className="container-contact-about">
                    <h1 className="text-thir-color header-container-about">NGƯỜI DÙNG NÓI GÌ ?</h1>
                    <div className="box-contact-about">
                        <div className="card-contact-about">
                            <img className="img-card-contact-about" src="/assets/img/LogoAboutImg (1).png" alt="" />
                        </div>

                        <div className="card-contact-about">
                            <img className="img-card-contact-about" src="/assets/img/LogoAboutImg (2).png" alt="" />
                        </div>

                        <div className="card-contact-about">
                            <img className="img-card-contact-about" src="/assets/img/LogoAboutImg (3).png" alt="" />
                        </div>

                        <div className="card-contact-about">
                            <img className="img-card-contact-about" src="/assets/img/LogoAboutImg (4).png" alt="" />
                        </div>

                        <div className="card-contact-about">
                            <img className="img-card-contact-about" src="/assets/img/LogoAboutImg (5).png" alt="" />
                        </div>

                        <div className="card-contact-about">
                            <img className="img-card-contact-about" src="/assets/img/LogoAboutImg (6).png" alt="" />
                        </div>

                        <div className="card-contact-about">
                            <img className="img-card-contact-about" src="/assets/img/LogoAboutImg (7).png" alt="" />
                        </div>

                        <div className="card-contact-about">
                            <img className="img-card-contact-about" src="/assets/img/LogoAboutImg (8).png" alt="" />
                        </div>
                    </div>
                </div>


                {/* <!-- ---------------------------------------CONTACT ABOUT--------------------------- --> */}

            </div>
            {/* <!-- ------------------------------------CONTAINER----------------------------------------> */}



            {/* <!-- ------------------------------------FOOTER----------------------------------------> */}
            <Footer />

        </Fragment>
    )
}

export default About;