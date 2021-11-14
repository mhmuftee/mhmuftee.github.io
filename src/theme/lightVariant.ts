import { green, red } from "@mui/material/colors"
import { ThemeOptions } from "./types"

export const lightVariant: ThemeOptions = {
  palette: {
    mode: "light",
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
  header: {
    height: 70,
    background: "#F332df",
  },
  sidebar: {
    width: 210,
    background: "#2D333B",
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
