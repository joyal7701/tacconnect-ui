import React, { Component } from "react";
import "./faqs.css";
import list from "./images/list.png";
import tacfull from "./images/Tacfull.png";
import { Link } from "react-router-dom";
class Faqs extends Component {
  js = () => {
    document.getElementById("headerlist-faqs").classList.toggle("header2-faqs");
  };
  open = () => {
    document.getElementById("card-block").classList.toggle("active");
  };
  open1 = () => {
    document.getElementById("card-block1").classList.toggle("active");
  };
  open2 = () => {
    document.getElementById("card-block2").classList.toggle("active");
  };
  open3 = () => {
    document.getElementById("card-block3").classList.toggle("active");
  };
  open4 = () => {
    document.getElementById("card-block4").classList.toggle("active");
  };
  open5 = () => {
    document.getElementById("card-block5").classList.toggle("active");
  };
  open6 = () => {
    document.getElementById("card-block6").classList.toggle("active");
  };
  open7 = () => {
    document.getElementById("card-block7").classList.toggle("active");
  };
  open8 = () => {
    document.getElementById("card-block8").classList.toggle("active");
  };
  open9 = () => {
    document.getElementById("card-block9").classList.toggle("active");
  };
  open10 = () => {
    document.getElementById("card-block10").classList.toggle("active");
  };
  open11 = () => {
    document.getElementById("card-block11").classList.toggle("active");
  };
  open12 = () => {
    document.getElementById("card-block12").classList.toggle("active");
  };
  open13 = () => {
    document.getElementById("card-block13").classList.toggle("active");
  };
  open14 = () => {
    document.getElementById("card-block14").classList.toggle("active");
  };

  render() {
    return (
      <div className="container-faqs">
        <div className="header-faqs" id="header">
          <a href="#">
            <img src={tacfull} className="header_name-faqs" />
          </a>
          <div className="names-faqs">
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
          <img
            src={list}
            className="hamburger"
            id="hamburger"
            onClick={this.js}
          ></img>
          <div className="headerlist-faqs" id="headerlist-faqs">
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
        <div className="main-faqs">
          <div className="general">
            <div className="faqHeader">General Questions</div>
            <div className="card">
              <div className="card-header">
                <h4 className="card-header">
                  <p id="card-header" onClick={this.open}>
                    Is account registration required?
                  </p>
                </h4>
              </div>
              <div className="card-block" id="card-block">
                Account registration at <strong>TAC</strong> is already done by
                the dummy email and password that comes with the product. You
                need to change the mail and password according to you while you
                setup the device. <br />
                If you still need help regarding the setup{" "}
                <Link to="/setup">click here!</Link>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h4 className="card-header">
                  <p id="card-header1" onClick={this.open1}>
                    How do I setup my TAC?
                  </p>
                </h4>
              </div>
              <div className="card-block" id="card-block1">
                To know the steps involved for setting up your{" "}
                <strong>TAC </strong>
                <Link to="/setup">click here!</Link>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h4 className="card-header">
                  <p id="card-header2" onClick={this.open2}>
                    Do I need any mobile application for using this device?
                  </p>
                </h4>
              </div>
              <div className="card-block" id="card-block2">
                NO. You do not need any mobile application to use this device,
                just the NFC feature and you are ready to go. For phones not
                having the NFC feature, you will require a QR reader for opening
                the link !
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h4 className="card-header">
                  <p id="card-header3" onClick={this.open3}>
                    Will this work if I tap it on my phone ?
                  </p>
                </h4>
              </div>
              <div className="card-block" id="card-block3">
                YES, definetly! If you still find the device not working check
                whether your mobile phone is <strong>TAC</strong> compatible.
                <Link to="/list.pdf">Click here</Link> to check compatible
                phones.{" "}
              </div>
            </div>

            <div className="faqHeader">Selling & Shop</div>
            <div className="card">
              <div className="card-header">
                <h4 className="card-header">
                  <p id="card-header4" onClick={this.open4}>
                    Can I order these <strong>TAC</strong>S in bulk?
                  </p>
                </h4>
              </div>
              <div className="card-block" id="card-block4">
                Yes you can order as many <strong>TAC</strong> as you want. We
                also assure you of offers on buying quantities more than 4.
              </div>
              <div className="card">
                <div className="card-header">
                  <h4 className="card-header">
                    <p id="card-header5" onClick={this.open5}>
                      Is the price on store the final price I have to pay?
                    </p>
                  </h4>
                </div>
                <div className="card-block" id="card-block5">
                  Yes the prize on store is final.
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h4 className="card-header">
                    <p id="card-header6" onClick={this.open6}>
                      What are the payment options?
                    </p>
                  </h4>
                </div>
                <div className="card-block" id="card-block6">
                  You can pay via credit or debit card or with any digital
                  wallets.
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h4 className="card-header">
                    <p id="card-header7" onClick={this.open7}>
                      By what time should I be expecting my order?
                    </p>
                  </h4>
                </div>
                <div className="card-block" id="card-block7">
                  You can expect your order in 4-5 working days after ordering
                  from India and in 6-15 days after ordering from outside India.
                </div>
              </div>

              <div className="faqHeader">Compatibility</div>
              <div className="card">
                <div className="card-header">
                  <h4 className="card-header">
                    <p id="card-header8" onClick={this.open8}>
                      Is my device TAC compatible?
                    </p>
                  </h4>
                </div>
                <div className="card-block" id="card-block8">
                  <strong>To view the full compatibility list, </strong>
                  <a href="/list.pdf">click here.</a>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h4 className="card-header">
                    <p id="card-header9" onClick={this.open9}>
                      How do I share my profile with non-compatible phones?
                    </p>
                  </h4>
                </div>
                <div className="card-block" id="card-block9">
                  You can share your profile with non-compatible phone either by
                  the share button on your profile or the QR code facility that
                  is available.
                </div>
              </div>

              <div className="faqHeader">Troubleshooting</div>
              <div className="card">
                <div className="card-header">
                  <h4 className="card-header">
                    <p id="card-header10" onClick={this.open10}>
                      Not working on iPhone
                    </p>
                  </h4>
                </div>
                <div className="card-block" id="card-block10">
                  <ol>
                    <li>
                      Make sure their phone works with TAC:{" "}
                      <a href="">Compatible Devices</a>
                    </li>
                    <li>
                      Make sure to tap your TAC to the very top of the back of
                      their phone.
                    </li>{" "}
                    On iPhones, the sweet spot for reading a TAC is on the very
                    top of the back of the device.
                    <li>A TAC cannot be read when:</li>
                  </ol>
                  <ul>
                    <li>their phone is in airplane mode</li>
                    <li>their device flashlight is on</li>
                    <li>their phone screen is off</li>
                    <li>their camera is open</li>
                  </ul>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h4 className="card-header">
                    <p id="card-header11" onClick={this.open11}>
                      Not working on Andoird
                    </p>
                  </h4>
                </div>
                <div className="card-block" id="card-block11">
                  <ol>
                    <li>
                      Make sure their phone works with TAC:{" "}
                      <a href="/list.pdf">Compatible Devices</a>
                    </li>
                    <li>
                      Make sure to tap your TAC to the very top of the back of
                      their phone.
                    </li>{" "}
                    For Androids, the sweet spot for reading a TAC is in the
                    center of the back of the device.
                    <li>Turn on NFC capabilities in their phone settings</li>
                  </ol>{" "}
                  If their phone is on the compatible devices list and is still
                  not reading your TAC, go to their phone settings and search
                  for NFC. Make sure that "NFC" is turned on!
                </div>
              </div>

              <div className="faqHeader">Shipping</div>
              <div className="card">
                <div className="card-header">
                  <h4 className="card-header">
                    <p id="card-header12" onClick={this.open12}>
                      How long does the shipping take?
                    </p>
                  </h4>
                </div>
                <div className="card-block" id="card-block12">
                  Shipping time within the India is typically 1-5 business days,
                  depending on your location. Shipping time outside of the India
                  is typically 7-21 business days. Please{" "}
                  <strong>contact us</strong> if you haven't received your order
                  or would like to request rushed shipping!
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h4 className="card-header">
                    <p id="card-header13" onClick={this.open13}>
                      I haven't received my order
                    </p>
                  </h4>
                </div>
                <div className="card-block" id="card-block13">
                  If you received an email saying your TAC has been shipped but
                  you haven't received it yet, please allow 4-5 business days
                  for it to arrive. If it has been longer than 6 days and you
                  still haven't received your <strong>TAC</strong>, please{" "}
                  <strong>Contact Us</strong> and we will resolve your issue!
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h4 className="card-header">
                    <p id="card-header14" onClick={this.open14}>
                      Do you ship worldwide?
                    </p>
                  </h4>
                </div>
                <div className="card-block" id="card-block14">
                  Yes we do ship worldwide. The shipping charges may incurred as
                  per the shipping location varies.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Faqs;
