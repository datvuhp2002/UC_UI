import Header from "@/modules/layout/main/templates/header"
import Footer from "@/modules/layout/main/templates/footer"
import React from "react"
import ChatBox from "@/modules/common/components/chat-box"
import LocationCurrent from "@/modules/common/components/location-current"

const Layout = ({ children }: {children: React.ReactNode}) => {
  return (<>
      {/* <LocationCurrent /> */}
      <div className="">
        <Header />
        <main>{children}</main>
        <Footer />
        {/* <ChatBox /> */}
      </div>
    </>
  )
}

export default Layout