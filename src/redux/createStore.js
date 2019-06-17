import { createStore as reduxCreateStore } from "redux"

const initialState = { language: "pt" }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ENGLISH":
      return { ...state, language: "en" }
    case "SET_PORTUGUESE":
      return { ...state, language: "pt" }
    default:
      return state
  }
}

const createStore = () => reduxCreateStore(reducer)

export default createStore
