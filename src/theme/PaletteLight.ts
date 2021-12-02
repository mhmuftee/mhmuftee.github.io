import { green, red } from "@mui/material/colors"
import { PaletteOptions } from "@mui/material/styles"

export const lightPalette: PaletteOptions = {
  mode: "light",
  nodecolor: red[500],
  linkcolor: green[500],
  primary: {
    main: "#FF9800",
    light: "#FFAC33",
    dark: "#B26A00",
  },
  secondary: {
    main: "#00897b",
    light: "#33A095",
    dark: "#005F56",
  },
  background: {
    body: "#fafafa",
    header: "#00897b",
    sidebar: "#fff",
    paper: "#fff",
  },
}
