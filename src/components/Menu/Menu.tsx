import React, { useContext } from "react"

import {
  Paper as MuiPaper,
  List as MuiList,
  Dialog,
  DialogActions as MuiDialogActions,
} from "@mui/material"
import { styled } from "@mui/material/styles"
import RotateButton from "components/common/RotateButton"
import { routes } from "pages"
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

const List = styled(MuiList)<{ component?: React.ElementType }>(
  ({ theme }) => ({
    padding: theme.spacing(1),
    alignContent: "center",
    justifyContent: "center",
  })
)

const DialogActions = styled(MuiDialogActions)(({ theme }) => ({
  padding: theme.spacing(1),
  alignContent: "center",
  justifyContent: "center",
  position: "sticky",
}))

const Menu = () => {
  const { isMenuOpen, menuCloseHandler, isSmallScreen } = useContext(UIContext)

  return (
    <Dialog
      fullWidth
      open={isMenuOpen}
      maxWidth="tablet"
      PaperComponent={Paper}
      transitionDuration={500}
      fullScreen={isSmallScreen}
      onClose={menuCloseHandler}
    >
      <List component="nav">
        {routes.map((routeProps, index) => (
          <NavListItem onClick={menuCloseHandler} key={index} {...routeProps} />
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
