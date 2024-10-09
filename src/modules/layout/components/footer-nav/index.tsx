const FooterNav = () => {
    return (
        <div className="row">
            <div className="col-sm-12">
                <div className="container d-flex align-items-center">
                    <div className="d-flex align-items-center mt-3 mb-3">
                        <span className="text-secondary">Trang chủ</span>
                    </div>
                    <div className="ms-auto">
                        <a data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                            <span className="text-theme">-- Thu gọn nội dung --</span>
                        </a>                      
                    </div>
                </div>
                <div id="collapseExample" className="collapse show container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-3 border-top">
                        <div className="col">
                            <h6 className="text-theme">Bộ sưu tập</h6>
                            <ul className="nav flex-column">
                                <li><a href="#">Hội thảo, kỷ yếu, tài liệu</a></li>
                                <li><a href="#">Tạp chí trong nước</a></li>
                                <li><a href="#">Tạp chí nước ngoài</a></li>
                                <li><a href="#">Sáng kiến</a></li>
                                <li><a href="#">Dự án Điện</a></li>
                            </ul>
                        </div>
                        <div className="col">
                            <h6 className="text-theme">Tin tức</h6>
                            <ul className="nav flex-column">
                                <li><a href="#">Trong nước</a></li>
                                <li><a href="#">Quốc tế</a></li>
                            </ul>
                        </div>
                        <div className="col">
                            <h6 className="text-theme">Chương trình đào tạo</h6>
                            <ul className="nav flex-column">
                                <li><a href="#">Đào tạo Đại học hệ chính quy</a></li>
                                <li><a href="#">Đào tạo Sau đại học</a></li>
                            </ul>
                        </div>
                        <div className="col d-none d-md-block">
                            {/* <svg className="w-100" height="55" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect></svg> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FooterNav;