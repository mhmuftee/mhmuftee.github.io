import { ThemeOptions } from "./types"

export const darkVariant: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#303C6C",
      light: "#7580AB",
      contrastText: "#FFF",
    },
    secondary: {
      main: "#E4F6F8",
      light: "#E4F6F8",
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
    background: "#545d68",
    footer: {
      color: "#FBE8A6",
      background: "#62757f",
    },
  },
  body: {
    background: "#042f66",
  },
  footer: {
    background: "#d3ffff",
    height: 28,
  },
  particle: {
    nodecolor: "#FFFFFF",
    linkcolor: "#FFFFFF",
  },
}
