import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <div className="container text-center">

        {/* Why is the <a> tag making it so the icon and text aren't in the same row anymore?  Made it so it encompasses the entire div and it works around it for now */}
        <a href="https://github.com/rwmullowney/" target="_blank" style={{ textDecoration: "none" }}>
          <div className="row justify-content-center">
            <img className="mx-1" style={{ maxHeight: "32px", maxWidth: "32px", width: "100%" }} src="./images/github.svg" /><h3 className="font-weight-light">Github</h3>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/ryan-mullowney-a9309443/" target="_blank" style={{ textDecoration: "none" }}>
          <div className="row justify-content-center">
            <img className="mx-1" style={{ maxHeight: "32px", maxWidth: "32px", width: "100%" }} src="./images/linkedin.svg" /><h3 className="font-weight-light">LinkedIn</h3>
          </div>
        </a>
        <div className="row justify-content-center">
          <img className="mx-1" style={{ maxHeight: "32px", maxWidth: "32px", width: "100%" }} src="./images/email.svg" /><h3 className="font-weight-light">Email</h3>
        </div>
      </div>
    );
  };
};
