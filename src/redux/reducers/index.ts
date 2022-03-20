import { combineReducers } from "@reduxjs/toolkit"

import personReducer from "./person/slice"

const reducers = {
  person: personReducer,
}

export default combineReducers(reducers)
