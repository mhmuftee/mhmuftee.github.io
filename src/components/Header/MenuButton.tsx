import React, { useMemo } from "react"

import { Box, Typography } from "@mui/material"
import RotateButton, { RotateButtonProps } from "components/common/RotateButton"
import Tooltip from "components/common/Tooltip"
import MenuDialog from "components/Menu"
import { useHomePage } from "hooks/useHomePage"
import { useMenu } from "hooks/useMenu"
import { Menu, AlignLeft, X } from "react-feather"

const MenuButton = (props: RotateButtonProps) => {
  const isHomePage = useHomePage()

  const [isMenuOpen, menuClickHandler, menuCloseHandler] = useMenu()

  const MenuIcon = useMemo(
    () => (isMenuOpen ? X : isHomePage ? Menu : AlignLeft),
    [isHomePage, isMenuOpen]
  )

  const title = isMenuOpen ? "Close" : "Open Menu"

  return (
    <Box sx={{ left: 0, flexDirection: "row", display: "flex" }}>
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
      <MenuDialog
        onMenuItemClick={menuCloseHandler}
        open={isMenuOpen}
        onClose={menuCloseHandler}
      />
    </Box>
  )
}

export default MenuButton
