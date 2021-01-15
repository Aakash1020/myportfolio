import React from "react"
import "./styles/Body.css"
import Footer from "./Footer"

function Body() {
  return (
    <div className="bodyitems">
      <div className="apptext">
        <h1>
          Aakash Rathod is a <span>#software engineer</span>, content creator
          and freelancer
        </h1>
      </div>

      <div className="main__column__section">
        <div className="columns">
          <div className="row1">
            <h1>I create content on Instragram</h1>
            <h2>
              I create facinating content, share tips and tricks and facts about
              programming languages with the world.
            </h2>
            <div id="button">
              <a href="https://www.instagram.com/theunamedude/">Visit Now</a>
            </div>
          </div>

          <div className="row2">
            <h1>Interest in Web Application Development</h1>
            <h2>
              Constant learning and Practicing code (Projects), Exploring new
              technologies.
            </h2>
            <div id="button">
              <a href="https://www.instagram.com/theunamedude/">Visit Now</a>
            </div>
          </div>
        </div>
      </div>

      <div className="apptext1">
        <h1>Technologies I'm familiar with:</h1>
        <div className="technologies">
          <div className="textblocks">
            <h2>Javascript</h2>
          </div>
          <div className="textblocks">
            <h2>React.js</h2>
          </div>
          <div className="textblocks">
            <h2>C++</h2>
          </div>
          <div className="textblocks">
            <h2>SQL</h2>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Body
