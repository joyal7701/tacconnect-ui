import React, { Component } from "react";
import Detail from "./store_helper";
import { Link } from "react-router-dom";
import fileiconimage from "./images/fileicon.png";
import shoppingbagimage from "./images/shoppingbag.jpg";
import list from "./images/list.png";
import tacfull from "./images/Tacfull.png";
import imageSource1 from "./images/back.jpg";
import usericonimage from "./images/user.png";
import imageSource2 from "./images/backgrd.jpeg";
import "./Store.css";
class Store extends Component {
  render() {
    return (
      <div className="container-store">
        <div className="header-store" id="header">
          <a href="#">
            <img src={tacfull} className="header_name-store" />
          </a>
          <div className="names-store">
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
          <img src={list} className="hamburger-store" id="hamburger"></img>
          <div className="headerlist-store">
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
        <div className="storeImage">
          <Detail
            title="Black Tac"
            price="Rs.499.99"
            imageSource={imageSource1}
          />
          <Detail
            title="White Tac"
            price="Rs.499.99"
            imageSource={imageSource2}
          />
          <Detail
            title="Pink Tac"
            price="Rs.499.99"
            imageSource={imageSource1}
          />
          <Detail
            title="Blue Tac"
            price="Rs.499.99"
            imageSource={imageSource2}
          />
        </div>
        <div className="threes">
          <img src={fileiconimage} className="fileiconimage" />
          <a className="trackorders" href="#">
            Track Orders
          </a>
          <img src={shoppingbagimage} className="shoppingbagimage" />
          <a className="shoppingbag" href="#">
            Shopping Bag
          </a>
          <img src={usericonimage} className="usericonimage" />
          <a className="signin" href="#">
            Sign In
          </a>
        </div>
        <div className="StoreFooter">© 2020 TAC, Inc. All Rights Reserved</div>
      </div>
    );
  }
}
export default Store;
