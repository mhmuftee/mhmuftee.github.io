import MuiIconButton, { IconButtonProps } from "@mui/material/IconButton"
import { styled } from "@mui/material/styles"

interface MenuButtonProps extends IconButtonProps {
  clicked?: boolean
}

const MenuButton = styled(MuiIconButton, {
  shouldForwardProp: (prop) => prop !== "clicked",
})<MenuButtonProps>(({ theme, hidden, clicked }) => ({
  ...(hidden && {
    display: "none",
  }),
  marginRight: theme.spacing(1),
  color: theme.palette.primary.main,
  transform: clicked ? "rotate(0deg)" : "rotate(360deg)",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}))

export default MenuButton
