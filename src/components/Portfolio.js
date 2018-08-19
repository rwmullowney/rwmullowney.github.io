import React, { Component } from 'react';
import "./Portfolio.css"

export default class Portfolio extends Component {
  render() {
    return (
      <div className="container text-center mt-5">
        <div className="row">

          <div className="col-4 justify-content-center">
            {/* <h2 className="font-weight-light">Politiscape</h2> */}
            <a href="https://rwmullowney.github.io/politiscape/" target="_blank" style={{ textDecoration: "none" }}>
              {/* <img className="portfolioImage" src="./images/politiscape.gif" /> */}
              <div className="wrapper">
                <video className="rounded shadow" src="./images/politiscape.mp4" type="video/mp4" autoPlay loop />
                <div className="d-inline-flex justify-content-center shadow bannerDiv"><h3 className="font-weight-light text-white mt-3">Politiscape</h3></div>
              </div>
            </a>
            <a className="githubLink" href="https://github.com/rwmullowney/politiscape" target="_blank">Github</a>
            <p className="mt-1 mx-5 font-weight-light">A web app designed to foster political engagement by allowing users to search via zip
code to view their representatives, and their contact information</p>
          </div>

          <div className="col-4">
            {/* <h2 className="font-weight-light">MyCrypto</h2> */}
            <a href="http://mycryptocurrency.herokuapp.com/" target="_blank" style={{ textDecoration: "none" }}>
              {/* <img className="portfolioImage" src="./images/mycrypto.jpg" /> */}
              <div className="wrapper">
                <video className="rounded shadow" src="./images/mycrypto.mp4" type="video/mp4" autoPlay loop />
                <div className="d-inline-flex justify-content-center shadow bannerDiv"><h3 className="font-weight-light text-white mt-3">MyCrypto</h3></div>
              </div>
            </a>
            <a className="githubLink" href="https://github.com/rwmullowney/MyCrypt" target="_blank">Github</a>
            <p className="mt-1 mx-5 font-weight-light">A cryptocurrency market simulator that allows users to invest virtual money based on real-time coin values</p>
          </div>

          <div className="col-4">
            <a href="https://rwmullowney.github.io/Hangman-Game/" target="_blank" style={{ textDecoration: "none" }}>
              {/* <img className="portfolioImage rounded" src="./images/hangman.gif" /> */}
              <div className="wrapper">
                <video className="rounded shadow" src="./images/hangman.mp4" type="video/mp4" autoPlay loop />
                <div className="d-inline-flex justify-content-center shadow bannerDiv"><h3 className="font-weight-light text-white mt-3">Nintendo Hangman</h3></div>
              </div>
            </a>
            <a className="githubLink" href="https://github.com/rwmullowney/Hangman-Game" target="_blank">Github</a>
            <p className="mt-1 mx-5 font-weight-light">A simple hangman game built with HTML, CSS, and JavaScript</p>
          </div>

        </div>
      </div>
      // <div className="projects">
      //   { this.props.children }
      // </div>
    )
  }
}
