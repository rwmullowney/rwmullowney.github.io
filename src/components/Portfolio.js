import React, { Component } from 'react';

export default class Portfolio extends Component {
  render() {
    return (
      <div className="container text-center mt-4">
        <div className="row">
          <div className="col-6 justify-content-center">
            {/* <h2 className="font-weight-light">Politiscape</h2> */}
            <a href="https://rwmullowney.github.io/politiscape/" target="_blank" style={{ textDecoration: "none" }}>
              <img className="" style={{ marginBottom: "-90px" }} src="./images/politiscape.gif" />
              <div className="d-inline-flex justify-content-center shadow" style={{ height: "75px", width: "416px", backgroundColor: "#3F729B" }}><h3 className="font-weight-light text-white mt-3">Politiscape</h3></div>
            </a>
            <div className="row justify-content-center mt-4 mx-5">
            <img style={{ maxHeight: "32px", maxWidth: "32px", width: "100%" }} src="./images/github.svg" /><a href="https://github.com/rwmullowney/politiscape/" className="font-weight-light">https://github.com/rwmullowney/politiscape/</a>
            </div>
            <p className="mt-4 mx-5 font-weight-light">A web app designed to foster political engagement by allowing users to search via zip code to view their representatives, and their contact information</p>
          </div>
          <div className="col-6">
            {/* <h2 className="font-weight-light">MyCrypto</h2> */}
            <a href="http://mycryptocurrency.herokuapp.com/" target="_blank" style={{ textDecoration: "none" }}>
              <img className="" style={{ marginBottom: "-90px" }} src="./images/mycrypto.jpg" />
              <div className="d-inline-flex justify-content-center shadow" style={{ height: "75px", width: "416px", backgroundColor: "#3F729B" }}><h3 className="font-weight-light text-white mt-3">MyCrypto</h3></div>
            </a>
            <div className="row justify-content-center mt-4 mx-5">
            <img style={{ maxHeight: "32px", maxWidth: "32px", width: "100%" }} src="./images/github.svg" /><a href="https://github.com/rwmullowney/MyCrypt" className="font-weight-light">https://github.com/rwmullowney/MyCrypt</a>
            </div>
            <p className="mt-4 mx-5 font-weight-light">A cryptocurrency market simulator that allows you to invest virtual money based on real-time coin values</p>
          </div>
        </div>
      </div>
      // <div className="projects">
      //   { this.props.children }
      // </div>
    )
  }
}
