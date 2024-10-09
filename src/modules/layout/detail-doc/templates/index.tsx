import Header from "@/modules/layout/detail-doc/templates/header"
import Footer from "@/modules/layout/detail-doc/templates/footer"
import React from "react"
import LocationCurrent from "@/modules/common/components/location-current"

const Layout = ({ children }: {children: React.ReactNode}) => {
  return (<>
    <div className="">
      <Header />
        <main>{children}</main>
      <Footer />
    </div>
    </>
  )
}

export default Layout