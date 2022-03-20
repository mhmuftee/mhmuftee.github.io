import MuiIconButton, { IconButtonProps } from "@mui/material/IconButton"
import { styled } from "@mui/material/styles"

export interface RotatingButtonProps extends IconButtonProps {
  clicked?: boolean
}

const RotatingButton = styled(MuiIconButton, {
  shouldForwardProp: (prop) => prop !== "clicked",
})<RotatingButtonProps>(({ theme, hidden, clicked }) => ({
  ...(hidden && {
    display: "none",
  }),
  transform: clicked ? "rotate(360deg)" : "rotate(0deg)",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}))

export default RotatingButton
