import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "redux/store"
import { ThemeMode } from "types"

export interface UIState {
  themeMode: ThemeMode
  openSidebar: boolean
  openMenu: boolean
}

const initialState: UIState = {
  themeMode: "light",
  openSidebar: false,
  openMenu: false,
}

export const uiSlice = createSlice({
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
    openMenu: (state) => {
      state.openMenu = true
    },
    closeMenu: (state) => {
      state.openMenu = false
    },
  },
})

export const selectThemeMode = (state: RootState) => state.ui.themeMode
export const selectOpenSideBar = (state: RootState) => state.ui.openSidebar
export const selectOpenMenu = (state: RootState) => state.ui.openMenu

export const { changeTheme, openSideBar, closeSideBar, openMenu, closeMenu } =
  uiSlice.actions

export default uiSlice.reducer
