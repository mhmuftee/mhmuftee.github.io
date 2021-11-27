import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "redux/store"
import { ThemeMode } from "types"

export interface UIState {
  themeMode: ThemeMode
  openSidebar: boolean
}

const initialState: UIState = {
  themeMode: "light",
  openSidebar: false,
}

export const sidebarSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<ThemeMode>) => {
      state.themeMode = action.payload
    },
    openSideBar: (state) => {
      state.openSidebar = true
    },
    closeSideBar: (state) => {
      state.openSidebar = false
    },
  },
})

export const selectThemeMode = (state: RootState) => state.ui.themeMode
export const selectOpenSideBar = (state: RootState) => state.ui.openSidebar

export const { changeTheme, openSideBar, closeSideBar } = sidebarSlice.actions

export default sidebarSlice.reducer
