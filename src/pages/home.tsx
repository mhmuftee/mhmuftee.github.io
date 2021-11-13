import React from "react"
import { Box } from "@mui/material"
import Header from "components/Header"

const Body = () => <div>Home</div>

const App = () => (
  <Box sx={{ flexGrow: 1 }}>
    <Header transparent={true} />
    <Body />
  </Box>
)

export default App
