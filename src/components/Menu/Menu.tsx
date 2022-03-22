import React, { useContext } from "react"

import {
  Paper as MuiPaper,
  List as MuiList,
  Dialog,
  Slide as MuiSlide,
  Zoom as MuiZoom,
  DialogActions as MuiDialogActions,
} from "@mui/material"
import { styled } from "@mui/material/styles"
import { TransitionProps } from "@mui/material/transitions"
import RotateButton from "components/common/RotateButton"
import Tooltip from "components/common/Tooltip"
import { routes } from "pages"
import { X as CloseIcon } from "react-feather"
import { UIContext } from "ui"

import NavListItem from "./NavListItem"

const Slide = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>
) {
  return <MuiSlide direction="right" ref={ref} {...props} />
})

const Zoom = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>
) {
  return <MuiZoom ref={ref} {...props} />
})

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

  const Transition = isSmallScreen ? Slide : Zoom
  const duration = isSmallScreen ? 350 : 500

  return (
    <Dialog
      fullWidth
      open={isMenuOpen}
      maxWidth="tablet"
      PaperComponent={Paper}
      transitionDuration={duration}
      fullScreen={isSmallScreen}
      onClose={menuCloseHandler}
      TransitionComponent={Transition}
    >
      <List component="nav">
        {routes.map((routeProps, index) => (
          <NavListItem onClick={menuCloseHandler} key={index} {...routeProps} />
        ))}
      </List>
      {isSmallScreen && (
        <DialogActions>
          <Tooltip title="Close">
            <RotateButton
              color="primary"
              clicked={isMenuOpen}
              onClick={menuCloseHandler}
            >
              <CloseIcon />
            </RotateButton>
          </Tooltip>
        </DialogActions>
      )}
    </Dialog>
  )
}

export default Menu
