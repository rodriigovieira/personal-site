import React from "react"
import { useSelector } from "react-redux"

import getLanguages from "../../utils/language"

import playStoreBadgePt from "../../assets/playStoreBadgePt.png"
import playStoreBadgeEn from "../../assets/playStoreBadgeEn.png"
import githubBadge from "../../assets/github_logo.png"

import Layout from "../../components/Layout"

const view = ({ location }) => {
  const passedData = location.state || {
    image: "https://via.placeholder.com/350",
    project: "",
    title: "",
    playStore: "",
    github: "",
    site: "",
  }

  const language = useSelector(({ language }) => language)

  const text = getLanguages(language)

  const getPortfolioText = () => {
    switch (passedData.project) {
      case "bestclean":
        return text.portfolio.projects.bestclean
      case "beerFinder":
        return text.portfolio.projects.beerFinder
      case "moviesFinder":
        return text.portfolio.projects.moviesFinder
      case "expensesTracker":
        return text.portfolio.projects.expensesTracker
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

      {passedData.site && (
        <div style={{ margin: "0 auto" }}>
          <a target="_blank" href={passedData.site}>
            {text.portfolio.website}
          </a>
        </div>
      )}

      {passedData.playStore && (
        <div style={{ margin: "0 auto", maxWidth: 200 }}>
          <a target="_blank" href={passedData.playStore}>
            {language === "pt" ? (
              <img src={playStoreBadgePt} alt="Play Store" />
            ) : (
              <img src={playStoreBadgeEn} alt="Play Store" />
            )}
          </a>
        </div>
      )}

      {passedData.github && (
        <div style={{ margin: "0 auto", maxWidth: 200 }}>
          <a target="_blank" href={passedData.github}>
            <img src={githubBadge} alt="Github" />
          </a>
        </div>
      )}
    </Layout>
  )
}

export default view
