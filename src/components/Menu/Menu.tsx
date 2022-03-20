import React from "react"

import {
  Paper as MuiPaper,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Theme,
  DialogActions,
} from "@mui/material"
import Dialog from "@mui/material/Dialog"
import { styled } from "@mui/material/styles"
import { makeStyles } from "@mui/styles"
import { UIContext } from "components/UI/UIContext"
import { Pages } from "pages"
import { X as Close } from "react-feather"
import { NavLink } from "react-router-dom"

import RotatingButton from "../Header/RotatingButton"

const Paper = styled(MuiPaper)(({ theme }) => ({
  background: theme.palette.background.body,
  [theme.breakpoints.down("tablet")]: {
    alignContent: "center",
    justifyContent: "center",
  },
}))

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    borderRadius: theme.spacing(1),
    padding: theme.spacing(1),
    "& svg, svg g, span": {
      color: theme.palette.primary.main,
    },
    "&:hover, &:focus": {
      background: theme.palette.primary.main,
      boxShadow: "2px 2px 5px rgb(0 0 0 / 20%)",
      "& svg, svg g, span": {
        color: theme.palette.getContrastText(theme.palette.primary.main),
      },
    },
  },
}))

const DialogMenu = () => {
  const classes = useStyles()
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
    >
      <List sx={{ p: 1, alignContent: "center", justifyContent: "center" }}>
        {Pages.map(({ path, title: text }) => (
          <ListItem disablePadding key={path} tabIndex={-1}>
            <ListItemButton
              dense
              to={path}
              component={NavLink}
              onClick={menuCloseHandler}
              classes={{ root: classes.button }}
            >
              <ListItemText
                primary={text}
                primaryTypographyProps={{ align: "center", variant: "h4" }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {isSmallScreen && (
        <DialogActions
          sx={{
            p: 1,
            alignContent: "center",
            justifyContent: "center",
            position: "sticky",
          }}
        >
          <RotatingButton
            color="primary"
            clicked={isMenuOpen}
            onClick={menuCloseHandler}
          >
            <Close />
          </RotatingButton>
        </DialogActions>
      )}
    </Dialog>
  )
}

export default DialogMenu
