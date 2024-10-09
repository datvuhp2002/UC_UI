"use client";

import Image from 'next/image';
import styles from './style.module.css'
import mdihomeoutline from "@/../public/images/mdi_home-outline.png";
import { usePathname } from 'next/navigation'
import LocationCurrent from '@/modules/common/components/location-current';

const HeaderNav = () => {
    const pathname = usePathname()
    const menus = [
    {
        name: "Trang chủ",
        path: "/",
    },{
        name: "Tìm nhanh",
        path: "/tra-cuu-du-lieu/tim-nhanh",
    },{
        name: "Tìm nâng cao",
        path: "/tra-cuu-du-lieu/tim-nang-cao",
    },{
        name: "Bộ sưu tập số",
        path: "/bo-suu-tap-tai-lieu-so",
    },{
        name: "Bộ sưu tập in",
        path: "/bo-suu-tap-tai-lieu-in",
    }
    ]
    const NavItems = () => {
        let html = [];
        let active;
        for(let i = 0;i < menus.length;i++)
        {
            if(menus[i].path == "/")
            {
                active = (pathname == "/" ? "active" : "");
                html.push(<li key={"mobile"} className="nav-item d-md-block d-none">
                    <a className={"nav-link sups p-0 " + active} aria-current="page" href="/">
                        <Image src={mdihomeoutline} alt="..." />
                    </a>
                </li>)
                html.push(<li key={i} className="nav-item px-4 d-md-none d-block">
                            <a className={"nav-link sups " + active} aria-current="page" href={menus[i].path}><span>{menus[i].name}</span></a>
                </li>)
            }
            else
            {
                active = (pathname.includes(menus[i].path) ? "active" : "");
                html.push(<li key={i} className="nav-item px-4">
                            <a className={"nav-link sups " + active} aria-current="page" href={menus[i].path}><span>{menus[i].name}</span></a>
                </li>)
            }
        }
        return html;
    }
    return (
        <div className="row">
            <div className="col-sm-12" >
                <nav className="navbar navbar-expand-md bg-menu">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                {NavItems()}
                            </ul>
                        </div>
                        <LocationCurrent />
                    </div>
                </nav>
            </div>
        </div> 

    )
}
export default HeaderNav;