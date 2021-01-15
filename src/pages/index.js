import React from "react"
import "./styles/index.css"
import App from "./App"
import background from "./images/background.jpg"

export default function Home() {
  return (
    <div className="background">
      <img className="backimg" src={background} alt=" " />
      <App />
    </div>
  )
}
