import React, { Component } from "react";
import { Link } from "react-router-dom";
import tacfull from "./images/Tacfull.png";
import lock from "./images/lock.jpeg";
import user from "./images/user.png";
import list from "./images/list.png";
import "./Profile.css";
// import "./Javascript.js";
class Profile extends Component {
    js = () => { 
    document.getElementById("hamburger").addEventListener("click", () => {
        // console.log("ytdf");
        document.getElementById("headerlist-profile").classList.toggle("header2-profile");
    })
  } 
  render() {
    return (
      <div>
        <div className="header-profile" id="header">
          <a href="#">
            <img src={tacfull} className="header_name-profile" />
          </a>
          <div className="names-profile">
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
          <img src={list} className="hamburger" id="hamburger" onClick={this.js}></img>
          <div className="headerlist-profile" id="headerlist-profile">
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
        <div className="container-profile">
          <form>
            <div className="cover-profile">
              <div className="signin-profile">SIGN IN</div>
              <div className="text-profile">
                <img src={user} alt="tacconnect" className="user"></img>
                <input type="text1" placeholder="Username" required=""></input>
              </div>
              <div className="text-profile">
                <img src={lock} alt="tacconnect" className="password"></img>
                <input
                  type="password"
                  placeholder="Password"
                  required=""
                ></input>
              </div>
              <div className="terms-profile">
                <label>
                  <input type="checkbox" required="" />I Agree To All Terms &
                  Conditions <a href="#">Here</a>
                </label>
              </div>
              <input
                className="button-profile"
                type="submit"
                value="Sign IN"
              ></input>
              <a href="#" className="forgotpassword">
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
        <div className="footer-profile">
          <p>© Tac connect. All Rights Reserved.</p>
        </div>
        {/* <script>
       { document.getElementById("hamburger").addEventListener("click", () => {
        console.log("ytdf");
        document.getElementById("headerlist-profile").classList.toggle("header2");
  })} 
        </script> */}
      </div>
    );
  }
}
export default Profile;
