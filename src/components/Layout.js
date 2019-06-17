import React from "react"

import Footer from "./Footer"
import Header from "./Header"
import Head from "./Head"

import layoutStyles from "./Layout.module.scss"

import "../styles/index.scss"

const AboutPage = props => {
  return (
    <div className={layoutStyles.container}>
      <Head />

      <div className={layoutStyles.content}>
        <Header />

        {props.children}
      </div>

      <div className={layoutStyles.footer}>
        <Footer />
      </div>
    </div>
  )
}

export default AboutPage
