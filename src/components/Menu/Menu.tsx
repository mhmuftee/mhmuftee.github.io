import React, { useMemo } from "react"

import {
  List as MuiList,
  Slide as MuiSlide,
  Zoom as MuiZoom,
  DialogActions as MuiDialogActions,
} from "@mui/material"
import MuiDialog, { DialogProps } from "@mui/material/Dialog"
import { styled } from "@mui/material/styles"
import { TransitionProps } from "@mui/material/transitions"
import RotateButton from "components/common/RotateButton"
import Tooltip from "components/common/Tooltip"
import { useSmallScreen } from "hooks/useSmallScreen"
import { routes } from "pages"
import { X as CloseIcon } from "react-feather"

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

const Dialog = styled(MuiDialog)(({ theme, fullScreen }) => ({
  "& .MuiDialog-paper": {
    background: theme.palette.background.body,
  },
  "& .MuiDialog-paperFullScreen": {
    ...(fullScreen && {
      alignContent: "center",
      justifyContent: "center",
    }),
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

type MenuProps = DialogProps & { onMenuItemClick: () => void }

const Menu = (props: MenuProps) => {
  const { onMenuItemClick, ...dialogProps } = props

  const isSmallScreen = useSmallScreen()

  const Transition = useMemo(
    () => (isSmallScreen ? Slide : Zoom),
    [isSmallScreen]
  )
  const duration = useMemo(() => (isSmallScreen ? 350 : 500), [isSmallScreen])

  return (
    <Dialog
      fullWidth
      maxWidth="tablet"
      fullScreen={isSmallScreen}
      transitionDuration={duration}
      TransitionComponent={Transition}
      {...dialogProps}
    >
      <List component="nav">
        {routes.map((routeProps, index) => (
          <NavListItem onClick={onMenuItemClick} key={index} {...routeProps} />
        ))}
      </List>
      {isSmallScreen && (
        <DialogActions>
          <Tooltip title="Close">
            <RotateButton
              color="primary"
              clicked={props.open}
              onClick={onMenuItemClick}
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
