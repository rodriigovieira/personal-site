import React from "react"
import { useSelector } from "react-redux"

import getLanguages from "../../utils/language"

import playStoreBadgePt from "../../assets/playStoreBadgePt.png"
import playStoreBadgeEn from "../../assets/playStoreBadgeEn.png"

import Layout from "../../components/Layout"

const view = ({ location }) => {
  const passedData = location.state || {
    image: "https://via.placeholder.com/350",
    project: "",
    title: "",
    playStore: "",
  }

  const language = useSelector(({ language }) => language)

  const text = getLanguages(language)

  const getPortfolioText = () => {
    switch (passedData.project) {
      case "bestclean":
        return text.portfolio.projects.bestclean
      default:
        return text.portfolio.projects.bestclean
    }
  }

  const pageText = getPortfolioText()

  return (
    <Layout>
      <div style={{ textAlign: "center" }}>
        <h3>{passedData.title}</h3>
      </div>

      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        <img src={passedData.image} alt="BestClean" />
      </div>

      <h4>{text.portfolio.details}</h4>

      <span>{pageText.description}</span>

      <br />
      <br />

      {passedData.playStore && (
        <div style={{ margin: "0 auto", maxWidth: 200 }}>
          <a href={passedData.playStore}>
            {language === "pt" ? (
              <img src={playStoreBadgePt} alt="Play Store" />
            ) : (
              <img src={playStoreBadgeEn} alt="Play Store" />
            )}
          </a>
        </div>
      )}
    </Layout>
  )
}

export default view
