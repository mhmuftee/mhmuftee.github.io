import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { RootState } from "redux/store"

import { fetchAll } from "./personAPI"

const initialState = {
  all: [],
}

export const fetchAllPerson = createAsyncThunk("person/fetchAll", async () => {
  const response = await fetchAll()
  return response.data
})

export const personSlice = createSlice({
  name: "person",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPerson.fulfilled, (state, action) => {
        state.all = action.payload.data
      })
      .addCase(fetchAllPerson.rejected, (state) => {
        state.all = []
      })
  },
})

export const selectAllPerson = (state: RootState) => state.person.all

export default personSlice.reducer
