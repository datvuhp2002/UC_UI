"use client"

import Header from "@/modules/layout/read-book/templates/header"
import Footer from "@/modules/layout/read-book/templates/footer"
import React from "react"
import { useParams } from "next/navigation";

const Layout = ({ children }: {children: React.ReactNode}) => {
  return (
    <div className={""}>
      <Header />
        <main>
          {children}
        </main>
      <Footer />
    </div>
  )
}

export default Layout