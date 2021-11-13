import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "redux/store"

export interface UIState {
  themeMode: string
  openSidebar: boolean
  openSidebarMobile: boolean
}

const initialState: UIState = {
  themeMode: "dark",
  openSidebar: true,
  openSidebarMobile: false,
}

export const sidebarSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<string>) => {
      state.themeMode = action.payload
    },
    openSideBar: (state) => {
      state.openSidebar = true
    },
    closeSideBar: (state) => {
      state.openSidebar = false
    },
    openSideBarMobile: (state) => {
      state.openSidebarMobile = true
    },
    closeSideBarMobile: (state) => {
      state.openSidebarMobile = false
    },
  },
})

export const selectThemeMode = (state: RootState) => state.ui.themeMode
export const selectOpenSideBar = (state: RootState) => state.ui.openSidebar

export const selectOpenSideBarMobile = (state: RootState) =>
  state.ui.openSidebarMobile

export const {
  openSideBar,
  closeSideBar,
  changeTheme,
  openSideBarMobile,
  closeSideBarMobile,
} = sidebarSlice.actions

export default sidebarSlice.reducer
