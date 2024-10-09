import React from "react"
import Header from "./header"

const Layout = ({ children }: {children: React.ReactNode}) => {
  return (<>
      <div className="admin">
        <Header />
        <main className="container">{children}</main>
      </div>
    </>
  )
}

export default Layout