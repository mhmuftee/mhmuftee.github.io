import React, { useContext, useMemo } from "react"

import Typography from "@mui/material/Typography"
import RotateButton, { RotateButtonProps } from "components/common/RotateButton"
import { Menu, AlignLeft, X } from "react-feather"
import { UIContext } from "ui"

const MenuButton = (props: RotateButtonProps) => {
  const { isMenuOpen, menuClickHandler, isSidebarOpen, isHomePage } =
    useContext(UIContext)

  const MenuIcon = useMemo(
    () => (isMenuOpen ? X : isHomePage ? Menu : AlignLeft),
    [isHomePage, isMenuOpen]
  )

  return (
    <>
      {!isSidebarOpen && (
        <div style={{ left: 0, flexDirection: "row", display: "flex" }}>
          <RotateButton
            clicked={isMenuOpen}
            onClick={menuClickHandler}
            {...props}
          >
            <MenuIcon />
          </RotateButton>
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
