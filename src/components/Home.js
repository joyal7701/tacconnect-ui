import React from "react";
import "./Home.css";
import mobileicon from "./images/mobileicon.png";
import magicwand from "./images/magicwand.jpg";
import securelock from "./images/securelock.png";
import gift from "./images/gift.jpg";
import ip2 from "./images/ip2.png";
import back from "./images/back.jpg";
import list from "./images/list.png";
import iphone6 from "./images/iphone6.png";
import { Link } from "react-router-dom";
import newjd from "./images/new.gif";
class Home extends React.Component {
  js = () => { 
    document.getElementById("hamburger").addEventListener("click", () => {
        document.getElementById("headerlist-home").classList.toggle("header2-home");
    })
  } 
  render() {
    return (
      <div className="container">
          <div className="header-home" id="header">
            <h1 className="header_name ">
              <Link to="/">TAC CONNECT</Link>
            </h1>
            <div className="names-home">
              <h2 className="store">
                <Link to="/store" className="name">STORE</Link>
              </h2>
              <h2 className="faqs">
                <Link to="/faqs" className="name">FAQS</Link>
              </h2>
              <h2 className="contact">
                <Link to="/contact" className="name">CONTACT</Link>
              </h2>
              <h2 className="profile">
                <Link to="/profile" className="name">PROFILE</Link>
              </h2>
              {/* <img
                src={list}
                alt={"tacconnect"}
                className="hamburger"
                id="hamburger"
              ></img> */}
            </div>
            <img src={list} className="hamburger" id="hamburger" onClick={this.js}></img>
            <div className="headerlist-home" id="headerlist-home">
              <ul>
                <li className="store1">
                <Link to="/">STORE</Link>
                </li>
                <li className="faqs1">
                <Link to="/profile">FAQS</Link>
                </li>
                <li className="contact1">
                <Link to="/contact">CONTACT</Link>
                </li>
                <li className="profile1">
                <Link to="/faqs">PROFILE</Link>
                </li>
              </ul>
            </div>
          </div>

        <div className="main">
          <div className="main2">
            <div className="text">
              <div className="desc">
                New Age Of Connecting <br />And Communicating !
              </div>
              <a href="#" className="btn">
                BUY NOW !!
              </a>
            </div>
            <div className="ipimg">
            <img src={iphone6} alt="tacconnect" className="iphone6" />
            </div>
          </div>
          </div>
        {/* <div> */}
          <div className="feat">
            <p className="head">Unlimited Features, Unlimited Fun</p>
            <p className="small">
              Check Out What You Can Do With This New Product
            </p>
            <hr />
            <div className="ip2">
              <img src={ip2} alt="tacconnect" className="phone"></img>
              <img src={newjd} alt="tacconnect" className="gif"></img>
            </div>
            {/* <div className="all"> */}
            <div className="mobileicon">
              <img className="mobileiconimage" src={mobileicon}></img>
              <text className="mobileiconfont1">OS Independent</text>
              <text className="mobileiconfont2">
                Works on most of the Android and all iOS Devices
              </text>
            </div>
            <div className="giftmain">
              <img className="giftimage" src={gift}></img>
              <text className="giftfont1">One Time Purchase</text>
              <text className="giftfont2">
                Purchase One Time And use Lifetime
              </text>
            </div>
            <div className="lockmain">
              <img className="lockimage" src={securelock}></img>
              <text className="lockfont1">Secure & Safe</text>
              <text className="lockfont2">
                You get to choose what you want to show depending on the person
                you meet
              </text>
            </div>
            <div className="magicwand">
              <img className="magicwandimage" src={magicwand}></img>
              <text className="magicwandfont1">One Tap Transfer</text>
              <text className="magicwandfont2">
                Transfer all Your Socials with just a Tap And Impress anyone you
                Meet
              </text>
            </div>
            {/* </div> */}
          </div>
        {/* </div> */}
        <div>
        <div className="third">
          {/* <img src={back} alt="tacconnect" /> */}
          <div className="bckgrd"></div>
          <p>
            Stop Waiting. <br /> Start Tapping.
          </p>
          <a href="#" className="btn2">
            BUY NOW
          </a>
        </div>
        </div>
        <div className="last">
          <p className="fst">We❤️ Connecting !</p>
          <form action="/">
            <div className="ctr">
              <p>
                To hear about our regular updates, offers and much more
                subscribe to our newsletter below !
              </p>
            </div>
            <div className="form-home">
              <input
                type="text"
                placeholder="Name"
                name="name"
                style={{
                  border: "none",
                  borderBottomStyle: "solid",
                  borderBottomWidth: "2px",
                  borderColor: "#f00",
                  backgroundColor: "#FACC2E",
                  background: "url(bg-pattern.png)",
                  textAlign: "center",
                  padding: "8px",
                }}
                size="25"
                required=""
              />
              <br></br>
              <input
                type="text"
                placeholder="Email Address"
                name="mail"
                style={{
                  border: "none",
                  borderBottomStyle: "solid",
                  borderBottomWidth: "2px",
                  borderColor: "#f00",
                  backgroundColor: "#FACC2E",
                  background: "url(bg-pattern.png)",
                  textAlign: " center",
                  padding: "8px",
                  marginBottom: "10px",
                }}
                size="30"
                required=""
              />
              <br></br>
              <label>
                <input type="checkbox" name="subscribe" />
                Daily Newsletter
              </label>
            </div>
            {/* <div className="subscribe"> */}
              <input type="submit" value="Subscribe" className="subscribe"/>
            {/* </div> */}
          </form>
          <a
            className="insta"
            href="https://www.instagram.com/tacconnect.in/"
          ></a>
        </div>
        <footer>
          <div className="container">
            <p>© Tac connect. All Rights Reserved.</p>
            <ul className="lst">
              <li className="privacy">
                <a href="/privacy">Privacy</a>
              </li>
              <li className="terms">
                <a href="/terms">Terms</a>
              </li>
              <li className="help">
                <a href="/help">FAQS</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}
export default Home;
