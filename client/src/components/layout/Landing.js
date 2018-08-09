import React, { Component } from "react";
// import { Link } from "react-router-dom";

import logo from '../../images/logo.png';
import "../css/Landing.css";

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="landing">
          <div>
            <h1 className="display-1">~ Love One Another ~</h1>
            <img className="logo" src={logo} height="100vh" alt="logo" />
            <h1 className="display-1">Building LOVE and Communities</h1>
          </div>
        </div>
        <div>
          <h1 className="display-4">Follow Our Movement</h1>
          <a className="socialmedialink" href="https://www.facebook.com/lovechangingtheworld" target="_blank">
            <i className="fab fa-facebook-square" /> Facebook
              </a>
          <a className="socialmedialink" href="https://twitter.com/LCTW_" target="_blank">
            <i className="fab fa-twitter-square" /> Twitter
              </a>
          <a className="socialmedialink" href="http://www.instagram.com/_lovechangingtheworld_" target="_blank">
            <i className="fab fa-instagram" /> Instagram
              </a>
          <a className="socialmedialink" href="https://www.youtube.com/channel/UCjF_zBD7MSpuplF-ULDabDw/featured" target="_blank">
            <i class="fab fa-youtube"></i> YouTube
              </a>
          <a className="socialmedialink" href="https://www.snapchat.com/add/lctw1" target="_blank">
            <i className="fab fa-snapchat-square" /> Snapchat
              </a>

          <h5>Donations</h5>
            <form action="https://www.paypal.me/lovechangingtheworld" target="_blank">
              <input type="submit" className="btn btn-primary buttonspace" value="PayPal" />
            </form>
          
          <p className="lead">
            Sponsors: Santa Clara County Department of Health Services,
            New Mission Community Church, Safeway, & Peter's Bakery.
          </p>
        </div>
      </div>
    );
  }
}

export default Landing;
