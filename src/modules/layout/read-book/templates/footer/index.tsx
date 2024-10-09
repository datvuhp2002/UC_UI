import FooterBottom from "../../../components/footer-bottom"

const Footer = () => {
  return (
    <>
      <footer style={{background: "url(" + process.env.FILE_URL + "images/footer.jpg) no-repeat", backgroundSize: "cover"}}>
        <div className="footer">
          <FooterBottom />
        </div>
      </footer>
    </>
  )
}

export default Footer