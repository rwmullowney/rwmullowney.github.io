import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <div className="container text-center">

        <div className="row justify-content-center mt-5">
          {/* Why is the <a> tag making it so the icon and text aren't in the same row anymore?  Made it so it encompasses the entire div and it works around it for now */}
          <a className="mx-5" href="https://github.com/rwmullowney/" target="_blank" style={{ textDecoration: "none" }}>
              <img className="mx-5" style={{ maxHeight: "128px", maxWidth: "128px", width: "100%", height: "100%"}} src="./images/github.svg" />
              {/* <h3 className="font-weight-light">Github</h3> */}
          </a>
          <a className="mx-5" href="https://www.linkedin.com/in/ryan-mullowney-a9309443/" target="_blank" style={{ textDecoration: "none" }}>
              <img className="mx-5" style={{ maxHeight: "128px", maxWidth: "128px", width: "100%", height: "100%"}} src="./images/linkedin.svg" />
              {/* <h3 className="font-weight-light">LinkedIn</h3> */}
          </a >
          <a className="mx-5">
            <img className="mx-5" style={{ maxHeight: "128px", maxWidth: "128px", width: "100%", height: "100%"}} src="./images/email.svg" />
            {/* <h3 className="font-weight-light">Email</h3> */}
            </a>
        </div>
      </div>
    );
  };
};
