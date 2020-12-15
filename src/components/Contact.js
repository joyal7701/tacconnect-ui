import React, { Component } from "react";
import tacfull from "./images/Tacfull.png";
import { Link } from "react-router-dom";
import list from "./images/list.png";
import "./Contact.css";
class Contact extends Component {
  js = () => { 
    document.getElementById("hamburger").addEventListener("click", () => {
        document.getElementById("headerlist-contact").classList.toggle("header2-contact");
    })};
  render() {
    return (
      <div className="container-contact">
        <div className="header-contact">
          <a href="#">
            <img src={tacfull} className="header_name-contact" />
          </a>
          <div className="names">
            <p className="home">
              <Link to="/">HOME</Link>
            </p>
            <p className="account">
              <Link to="/profile">ACCOUNT</Link>
            </p>
            <p className="contact">
              <Link to="/contact">CONTACT</Link>
            </p>
            <p className="faqs">
              <Link to="/faqs">FAQS</Link>
            </p>
          </div>
          <p className="login">
            <Link to="/profile">LOG IN</Link>
          </p>
          <img src={list} className="hamburger" id="hamburger" onClick={this.js}></img>
          <div className="headerlist-contact" id="headerlist-contact">
            <ul>
              <li className="home1">
              <Link to="/">HOME</Link>
              </li>
              <li className="account1">
              <Link to="/profile">ACCOUNT</Link>
              </li>
              <li className="contact1">
              <Link to="/contact">CONTACT</Link>
              </li>
              <li className="faqs1">
              <Link to="/faqs">FAQS</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="main-contact">
          <div className="info">
            <p className="cinfo">Contact Information</p>
            <li className="emailinfo">
              <a href="#">support1@tacconnect.in</a>
            </li>
          </div>
          <div className="form">
            <p className="head">Get In Touch</p>
            <form>
              <div className="name">
                <input
                  type="text"
                  placeholder="Your firstname"
                  className="firstname"
                ></input>
                <input
                  type="text"
                  placeholder="Your lastname"
                  className="lastname"
                ></input>
              </div>
              <input
                type="text"
                placeholder="Your email address"
                className="emailaddress"
              ></input>
              <input
                type="text"
                placeholder="Your subject of this message"
                className="subject"
              ></input>
              <textarea
                className="aboutus"
                id="message"
                name="message"
                cols="35"
                rows="10"
                placeholder="Say something about us"
              ></textarea>
              <input className="btn" type="submit" value="Send Message"></input>
            </form>
          </div>
        </div>
        <div className="Footer-contact">© 2020 TAC, Inc. All Rights Reserved</div>
      </div>
    );
  }
}
export default Contact;
