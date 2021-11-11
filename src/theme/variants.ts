import { ThemeOptions } from "./types"

const darkVariant: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#303C6C",
      light: "#7580AB",
      contrastText: "#FFF",
    },
    secondary: {
      main: "#00acc1", // "#9c27b0",
      light: "#E4F6F8", // "#D4A2DD",
      contrastText: "#FFF",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
  header: {
    height: 70,
    background: "#2D333B",
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
    background: "#22272E",
  },
  footer: {
    background: "#d3ffff",
    height: 28,
  },
}

const variants = [darkVariant]

export default variants
