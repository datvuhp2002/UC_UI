import FooterBottom from "../../../components/footer-bottom"
import FooterExt from "../../../components/footer-ext"
import FooterNav from "../../../components/footer-nav"

const Footer = () => {
  return (
    <>
      <footer style={{background: "url(" + process.env.FILE_URL + "images/footer.jpg) no-repeat", backgroundSize: "cover"}}>
        <div className="footer">
          <FooterBottom />
          <FooterExt />
        </div>
      </footer>
    </>
  )
}

export default Footer