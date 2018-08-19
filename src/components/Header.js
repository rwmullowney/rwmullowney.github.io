import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="container text-center mt-3 mb-1">
          <h1 className="font-weight-light display-4">Ryan Mullowney</h1>
          <ul className="row justify-content-center mr-4" style={{
            listStyleType: 'none',
            // display: "inline",
          }}>
            <li className="mx-3"><Link to={routes.HOME}>Home</Link></li>
            <li className="mx-3"><Link to={routes.PORTFOLIO}>Portfolio</Link></li>
            <li className="mx-3"><Link to={routes.CONTACT}>Contact</Link></li>
          </ul>
        </div>

        <hr width="50%"/>
      </div>
    );
  };
};
