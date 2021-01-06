import ImageBestClean from "../assets/mockup_bestclean.png"
import ImageBeerFinder from "../assets/mockup_beer.png"
import ImageUlocal from "../assets/mockup_ulocal.png"
import ImageRewardMeNow from "../assets/mockup_reward_me_now.png"
import Imagei4fit from "../assets/mockup_i4fit.png"
import ImageExpenses from "../assets/mockup_expenses.jpg"
import ImageMovies from "../assets/mockup_movies.png"

const portfolio = [
  {
    title: "BestClean",
    project: "bestclean",
    image: ImageBestClean,
    summaryEn: "BestClean - complete cross-platform application",
    summaryPt: "BestClean - aplicação multi-plataforma completa",
    playStore:
      "https://play.google.com/store/apps/details?id=com.lavanderiabestclean.bestclean",
  },
  {
    title: "Ulocal",
    project: "ulocal",
    image: ImageUlocal,
    summaryEn: "Ulocal - The unique experience to discover where to buy local products",
    summaryPt: "Ulocal - A experiência única de descobrir onde encontrar produtos locais",
    playStore:
      "https://play.google.com/store/apps/details?id=co.ulocal&hl=en&gl=US",
    appStore: "https://apps.apple.com/ca/app/ulocal-local-products/id1468266437"
  },
  {
    title: "Reward Me Now",
    project: "rewardMeNow",
    image: ImageRewardMeNow,
    summaryEn: "Reward Me Now – Employee rewards and recognition platform",
    summaryPt: "Reward Me Now – Plataforma de recompensação e reconhecimento de colaboradores",
    playStore:
      "https://play.google.com/store/apps/details?id=com.redu.Ashleigh&hl=en&gl=US",
    appStore: "https://apps.apple.com/gb/app/reward-me-now/id1289615311"
  },
  {
    title: "i4fit",
    project: "i4fit",
    image: Imagei4fit,
    summaryEn: "i4fit",
    summaryPt: "i4fit",
    playStore:
      "https://play.google.com/store/apps/details?id=br.com.ifitness.i4fit&hl=pt_BR",
    appStore: "https://apps.apple.com/br/app/i4fit/id1148668798"
  },
]

const openSourcePortfolio = [
  {
    title: "ExpensesTracker",
    project: "expensesTracker",
    image: ImageExpenses,
    summaryEn: "ExpensesTracker - the quick solution for saving money",
    summaryPt: "ExpensesTracker - a simples solução para economizar",
    playStore:
      "https://play.google.com/store/apps/details?id=com.rodrigo.vieira.expensestracker",
    github: "https://github.com/rodriigovieira/rn-challenge-2",
  },
  {
    title: "MoviesFinder",
    project: "moviesFinder",
    image: ImageMovies,
    summaryEn: "MoviesFinder - a database with your favorite movies",
    summaryPt: "MoviesFinder - um espaço com todos seus filmes favoritos",
    github: "https://github.com/rodriigovieira/banco-filmes",
    site: "https://movies.rodrigorodrigues.dev"
  },
  {
    title: "BeerFinder",
    project: "beerFinder",
    image: ImageBeerFinder,
    summaryEn: "BeerFinder - your beer encyclopedia",
    summaryPt: "BeerFinder - a enciclopédia para os cervejeiros",
    github: "https://github.com/rodriigovieira/mobile-teste",
  },
]

export {portfolio, openSourcePortfolio}
