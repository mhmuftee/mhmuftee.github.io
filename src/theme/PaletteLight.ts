import { green, red } from "@mui/material/colors"
import { PaletteOptions } from "@mui/material/styles"

export const lightPalette: PaletteOptions = {
  mode: "light",
  nodecolor: red[500],
  linkcolor: green[500],
  primary: {
    main: "#26C6DA",
    light: "#43cade",
    dark: "#35a1b1",
  },
  secondary: {
    main: "#00897b",
    light: "#33A095",
    dark: "#005F56",
  },
  text: {
    primary: "#607d8b",
  },
  background: {
    body: "#EEF5F9",
    header: "#1A61A4", //"#2588E5",
    sidebar: "#FFFFFF",
    paper: "#FFFFFF",
  },
}
