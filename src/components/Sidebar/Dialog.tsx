import * as React from "react"

import { Dialog, Paper as MuiPaper } from "@mui/material"
import { styled } from "@mui/material/styles"
import Header from "components/Header"
import { useAppDispatch, useAppSelector } from "redux/hooks"
import {
  selectOpenMenu,
  selectSmallScreen,
  closeMenu,
} from "redux/reducers/ui/slice"

import MenuItems from "./List"

const BigPaper = styled(MuiPaper)(({ theme }) => ({
  background: theme.palette.background.body,
}))

const SmallPaper = styled(MuiPaper)(({ theme }) => ({
  background: theme.palette.background.body,
  alignContent: "center",
  justifyContent: "center",
}))

const DialogMenu = () => {
  const dispatch = useAppDispatch()
  const open = useAppSelector(selectOpenMenu)
  const isSmallScreen = useAppSelector(selectSmallScreen)

  const Paper = isSmallScreen ? SmallPaper : BigPaper

  const handleClose = () => {
    dispatch(closeMenu())
  }

  return (
    <Dialog
      onClose={handleClose}
      fullScreen={isSmallScreen}
      open={open}
      fullWidth={true}
      maxWidth="md"
      PaperComponent={Paper}
      transitionDuration={500}
    >
      <Header ishomepage={true} />
      <MenuItems handleClose={handleClose} />
    </Dialog>
  )
}

export default DialogMenu
