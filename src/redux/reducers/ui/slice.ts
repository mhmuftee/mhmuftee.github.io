import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "redux/store"
import { ThemeMode } from "types"

export interface UIState {
  themeMode: ThemeMode
  openSidebar: boolean
  openMobileMenu: boolean
}

const initialState: UIState = {
  themeMode: "light",
  openSidebar: false,
  openMobileMenu: false,
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
    openMobileMenu: (state) => {
      state.openMobileMenu = true
    },
    closeMobileMenu: (state) => {
      state.openMobileMenu = false
    },
  },
})

export const selectThemeMode = (state: RootState) => state.ui.themeMode
export const selectOpenSideBar = (state: RootState) => state.ui.openSidebar
export const selectOpenMobileMenu = (state: RootState) =>
  state.ui.openMobileMenu

export const {
  changeTheme,
  openSideBar,
  closeSideBar,
  openMobileMenu,
  closeMobileMenu,
} = uiSlice.actions

export default uiSlice.reducer
