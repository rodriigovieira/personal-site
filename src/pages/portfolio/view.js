import React from "react"
import { useSelector } from "react-redux"

import getLanguages from "../../utils/language"

import playStoreBadgePt from "../../assets/playStoreBadgePt.png"
import playStoreBadgeEn from "../../assets/playStoreBadgeEn.png"
import appStoreBadgePt from "../../assets/app_store_badge_pt.png"
import appStoreBadgeEn from "../../assets/app_store_badge_en.png"
import githubBadge from "../../assets/github_logo.png"

import Layout from "../../components/Layout"

const DefaultPassedData = {
  image: "https://via.placeholder.com/350",
  project: "",
  title: "",
  playStore: "",
  github: "",
  site: "",
  appStore: "",
}

const View = ({ location }) => {
  const passedData = location?.state || DefaultPassedData

  const language = useSelector(({ language }) => language)

  const text = getLanguages(language)

  const projectName = passedData?.project || ""
  const pageText = text?.portfolio?.projects[projectName]?.description

  return (
    <Layout>
      <div style={{ textAlign: "center" }}>
        <h3>{passedData?.title}</h3>
      </div>

      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        <img src={passedData?.image} alt="BestClean" />
      </div>

      <h4>{text?.portfolio?.details}</h4>

      <span>{pageText}</span>

      <br />
      <br />

      {passedData?.site && (
        <div style={{ margin: "0 auto" }}>
          <a target="_blank" href={passedData.site}>
            {text.portfolio.website}
          </a>
        </div>
      )}

      {passedData?.playStore && (
        <div style={{ margin: "0 auto", maxWidth: 200 }}>
          <a target="_blank" href={passedData?.playStore}>
            {language === "pt" ? (
              <img width={500} src={playStoreBadgePt} alt="Play Store" />
            ) : (
              <img width={500} src={playStoreBadgeEn} alt="Play Store" />
            )}
          </a>
        </div>
      )}

      {passedData?.appStore && (
        <div style={{ margin: "0 auto", maxWidth: 200 }}>
          <a target="_blank" href={passedData?.appStore}>
            {language === "pt" ? (
              <img width={450} src={appStoreBadgePt} alt="App Store" />
            ) : (
              <img width={450} src={appStoreBadgeEn} alt="App Store" />
            )}
          </a>
        </div>
      )}

      {passedData?.github && (
        <div style={{ margin: "0 auto", maxWidth: 200 }}>
          <a target="_blank" href={passedData.github}>
            <img src={githubBadge} alt="Github" />
          </a>
        </div>
      )}
    </Layout>
  )
}

export default View
