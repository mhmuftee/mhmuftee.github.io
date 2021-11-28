import { combineReducers } from "@reduxjs/toolkit"
// import { persistReducer } from "redux-persist"
// import storage from "redux-persist/lib/storage"
import uiReducer from "./ui/slice"

/**
const uiPersistConfig = {
  key: "ui",
  storage,
  whitelist: ["themeMode"],
} */

const reducers = {
  // ui: persistReducer(uiPersistConfig, uiReducer),
  ui: uiReducer,
}

export default combineReducers(reducers)
