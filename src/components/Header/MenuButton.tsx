import React, { useContext, useMemo } from "react"

import Typography from "@mui/material/Typography"
import RotateButton, { RotateButtonProps } from "components/common/RotateButton"
import Tooltip from "components/common/Tooltip"
import { Menu, AlignLeft, X } from "react-feather"
import { UIContext } from "ui"

const MenuButton = (props: RotateButtonProps) => {
  const { isMenuOpen, menuClickHandler, isSidebarOpen, isHomePage } =
    useContext(UIContext)

  const MenuIcon = useMemo(
    () => (isMenuOpen ? X : isHomePage ? Menu : AlignLeft),
    [isHomePage, isMenuOpen]
  )

  const title = isMenuOpen ? "Close" : "Open Menu"

  return (
    <>
      {!isSidebarOpen && (
        <div style={{ left: 0, flexDirection: "row", display: "flex" }}>
          <Tooltip title={title} placement="bottom-end">
            <RotateButton
              clicked={isMenuOpen}
              onClick={menuClickHandler}
              {...props}
            >
              <MenuIcon />
            </RotateButton>
          </Tooltip>
          {isHomePage && (
            <Typography variant="h6" sx={{ margin: "auto" }}>
              {isMenuOpen ? "Close" : "Menu"}
            </Typography>
          )}
        </div>
      )}
    </>
  )
}

export default MenuButton
