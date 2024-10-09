"use client"

import Image from "next/image"
import ProfileUser from "@/../public/images/profile-user.png";
import { usePathname } from "next/navigation";
const Header = () => {
    const pathname = usePathname()
    const menuActive = (urls:any) => {
      if(urls)
      {
        for(let i = 0;i < urls.length;i++) {
          if(pathname.includes(urls[i]))
          {
            return "active";
          }
        }
      }
      return "";
    }
    return (
      <nav className="header navbar navbar-expand-lg bg-theme p-3 mb-3 border-bottom pt-1 pb-1">
        <div className="container">
          <img className="me-2" width={40} height={40} src={process.env.FILE_URL + "images/logo.png"} alt="..." />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className={"nav-link " + menuActive(["/admin/dashboard"])} aria-current="page" href="/admin/dashboard">Dashboard</a>
              </li>
              <li className="nav-item dropdown">
                <a className={"nav-link dropdown-toggle " + menuActive(["/admin/cards", "/admin/card-detail"])} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Quản lý thẻ đăng ký
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/admin/cards">DS thẻ đăng ký</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/admin/cards">DS thẻ chờ duyệt</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/admin/cards">DS thẻ đã duyệt</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/admin/cards">DS thẻ hủy</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/admin/cards">DS thẻ đã thanh toán</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Hướng dẫn sử dụng</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Phán ánh kiến nghị</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Hệ thống
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Dm nghề nghiệp</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">DM trình độ</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">DM loại thẻ</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Cấu hình chung</a></li>
                </ul>
              </li>
            </ul>
            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input type="search" className="form-control" placeholder="Tìm kiếm thẻ..." aria-label="Search" />
            </form>
            <div className="dropdown text-end">
              <a href="#" className="d-block link-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                <Image src={ProfileUser} alt="mdo" width={32} height={32} className="rounded-circle" />
              </a>
              <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Đăng xuất</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    )
}
  
export default Header