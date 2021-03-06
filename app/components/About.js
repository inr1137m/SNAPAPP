import React from "react"
import Page from "./Page"
import arch from "public/SNAPAPP_ARCH.jpg"

function About() {
  return (
    <Page title="About" Wide="true">
      <h2>About this Project</h2>
      <h4 className="lead text-muted">Hi there ๐,</h4>
      <p className=" text-muted">
        This is a Single-Page-Application (๐SPA) developed using component
        based ๐React Js framework and the โRest API's was developed using
        ๐Python frameworks for URL ๐ธWeb Scraper and URL ๐ธScreenshot features.
        This was completely designed and developed for ๐จโ๐ฌmy self-learning and
        practical hands-on๐จโ๐ป in this frameworks.
      </p>
      <ul>
        <li>
          <strong>Front-End </strong>๐ป : React Js + Bootstrap + Css + Html5
        </li>
        <li>
          <strong>Back-End </strong>๐  : Python + Flask + FastAPI + Uvicorn
        </li>
        <li>
          <strong>Javascript Libraries </strong>๐ :
          <i> React, Node-fetch, Form-data, Webpack & Babel</i>
        </li>
        <li>
          <strong>Python Libraries </strong>๐ :
          <i>
            {" "}
            Flask, Flask-cors, Simplified-scrapy, FastAPI, Uvicorn & Pyppeteer
          </i>
        </li>
      </ul>
      <p>
        <strong>
          Deployed in AWS Cloud using CI/CD Pipeline integration with Github,
          Code-Pipeline, Beanstalk, EC2 and S3.
        </strong>
      </p>
      <img
        src={arch}
        className="img-fluid"
        id="arch_img"
        alt="Aws Deployment Diagram"
      />
      <br />
      <br />
      <p>
        <strong>Github Repo's :</strong>
        <ul>
          <li>
            <a href="https://github.com/inr1137m/SNAPAPP.git" target="_blank">
              {" "}
              Source Code-UI ๐
            </a>
          </li>
          <li>
            <a href="https://github.com/inr1137m/URLIZE.git" target="_blank">
              {" "}
              Source Code-Backend ๐
            </a>
          </li>
        </ul>
      </p>
      <p className="text-muted">
        <a
          href="https://www.linkedin.com/in/iyyanar-m/"
          target="_blank"
          style={{ color: "red", "font-weight": "bold" }}
        >
          ๐ฌ Hit-me up for colloboration.
        </a>
      </p>
      {/* <em>Thanks for visiting my site </em>๐ */}
    </Page>
  )
}

export default About
