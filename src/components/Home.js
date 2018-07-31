import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div className="container text-center mt-4">
        <h2 className="font-weight-light">Hey!  I'm Ryan.</h2>

        <h3 className="font-weight-light mt-4">I'm a full-stack web developer.</h3>

        <h3 className="font-weight-light mt-4">Feel free to explore my work or connect with me through the tabs above.</h3>
        
        <h3 className="font-weight-light mt-4">And, you can view my resume <a href="https://drive.google.com/file/d/1g3EIAP2-eTrexFxn0e5ZgaUfgZS3wl1x/view?usp=sharing" target="_blank">here</a>.</h3>
      </div>
      // <div className="home">
      //   { this.props.children }
      // </div>
    )
  }
}
