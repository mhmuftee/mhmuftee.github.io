import IconButton, { IconButtonProps } from "@mui/material/IconButton"
import { styled } from "@mui/material/styles"

export interface RotateButtonProps extends IconButtonProps {
  clicked?: boolean
}

const RotatingButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "clicked",
})<RotateButtonProps>(({ theme, clicked }) => ({
  transform: clicked ? "rotate(360deg)" : "rotate(0deg)",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}))

export default RotatingButton
