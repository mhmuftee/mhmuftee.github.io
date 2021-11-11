import { combineReducers } from "@reduxjs/toolkit"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import uiReducer from "./ui/uiSlice"

const uiPersistConfig = {
  key: "ui",
  storage,
  whitelist: ["openSidebar", "openSidebarMobile"],
}

const reducers = {
  ui: persistReducer(uiPersistConfig, uiReducer),
}

export default combineReducers(reducers)
