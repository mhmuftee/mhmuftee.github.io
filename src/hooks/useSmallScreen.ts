import { useMediaQuery, Theme } from "@mui/material"

export const useSmallScreen = (): boolean =>
  useMediaQuery((theme: Theme) => theme.breakpoints.down("bigtablet"))
