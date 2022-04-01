import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Routes } from "react-router-dom"
// require("dotenv").config()

//components
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Footer from "./components/Footer"

///Routing Single page application
function Main() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById("app")
)

//Hot Modulre Replacement - HMR -  no need to refresh browser
if (module.hot) {
  module.hot.accept()
}
