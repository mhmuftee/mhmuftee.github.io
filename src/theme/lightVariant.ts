import { green, red } from "@mui/material/colors"
import { ThemeOptions } from "./types"

export const lightVariant: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#042f66",
    },
    secondary: {
      main: "#042f66",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
  header: {
    height: 70,
    background: "#1E3F66",
  },
  sidebar: {
    width: 210,
    background: "#1E3F66",
    footer: {
      color: "#FBE8A6",
      background: "#62757f",
    },
  },
  body: {
    background: "#FFdf",
  },
  footer: {
    background: "#FFdf",
    height: 28,
  },
  particle: {
    nodecolor: red[500],
    linkcolor: green[500],
  },
}
