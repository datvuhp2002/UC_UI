import HeaderNav from "@/modules/layout/components/header-nav"
import HeaderTop from "../../../components/header-top"

const Header = () => {
    return (
      <header className="">
        <div style={{ height:5, background: "linear-gradient(90deg, #69BE28 22%, #109070 22% 40%, #3890a4 40%)" }}></div>
        <HeaderTop label={"TRA CỨU TÀI LIỆU"} isLinkAccount={false}/>
        <HeaderNav />
      </header>
    )
}
  
export default Header