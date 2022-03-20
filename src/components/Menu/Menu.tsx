import React from "react"

import {
  Paper as MuiPaper,
  List as MuiList,
  Dialog,
  DialogActions as MuiDialogActions,
} from "@mui/material"
import { styled } from "@mui/material/styles"
import RotateButton from "components/common/RotateButton"
import { Pages } from "pages"
import { X as CloseIcon } from "react-feather"
import { UIContext } from "ui"

import NavListItem from "./NavListItem"

const Paper = styled(MuiPaper)(({ theme }) => ({
  background: theme.palette.background.body,
  [theme.breakpoints.down("bigtablet")]: {
    alignContent: "center",
    justifyContent: "center",
  },
}))

const List = styled(MuiList)(({ theme }) => ({
  padding: theme.spacing(1),
  alignContent: "center",
  justifyContent: "center",
}))

const DialogActions = styled(MuiDialogActions)(({ theme }) => ({
  padding: theme.spacing(1),
  alignContent: "center",
  justifyContent: "center",
  position: "sticky",
}))

const Menu = () => {
  const { isMenuOpen, menuCloseHandler, isSmallScreen } =
    React.useContext(UIContext)

  return (
    <Dialog
      open={isMenuOpen}
      PaperComponent={Paper}
      transitionDuration={500}
      maxWidth="tablet"
      fullWidth
      fullScreen={isSmallScreen}
      onClose={menuCloseHandler}
    >
      <List>
        {Pages.map((pageProps, index) => (
          <NavListItem onClick={menuCloseHandler} key={index} {...pageProps} />
        ))}
      </List>
      {isSmallScreen && (
        <DialogActions>
          <RotateButton
            color="primary"
            clicked={isMenuOpen}
            onClick={menuCloseHandler}
          >
            <CloseIcon />
          </RotateButton>
        </DialogActions>
      )}
    </Dialog>
  )
}

export default Menu
