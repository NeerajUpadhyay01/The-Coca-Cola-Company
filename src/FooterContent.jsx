import React from "react";
import CanvasTemplate from "../models/CanvasTemplate";

function FooterContent() {
  return (
    <footer className="footer">
      <span>
        The <h2>Coca-Cola</h2> Company
      </span>
      <div>
        <div className="footer-grid">
          <div className="footer-column">
            <a href="#">Log In</a>
            <a href="#">FAQs</a>
            <a href="#">Sitemap</a>
            <a href="#">Contact Us</a>
          </div>
          <div className="footer-column">
            <a href="#">Company</a>
            <a href="#">Shipping</a>
            <a href="#">Order Status</a>
            <a href="#">Coca‑Cola Online</a>
          </div>
          <div className="footer-column">
            <a href="#">Careers</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookies Policy</a>
          </div>
          <div className="footer-column">
            <a href="#">Cookie Settings</a>
            <a href="#">Terms of Service</a>
            <a href="#">Notice At Collection</a>
          </div>
        </div>
        <CanvasTemplate
          model={"./vintage_coca-cola_vending_machine.glb"}
          rotation={[0, -0.5, 0]}
          position={[0, 0, -12]}
        />
      </div>
      <div className="contact">
        <img
          src="./icons8-twitter-64.webp"
          alt=""
          style={{ width: 25 + "px", height: 25 + "px" }}
        />
        <img src="./icons8-instagram-64.webp" alt="" />
        <img src="./icons8-facebook-64.webp" alt="" />
        <img
          src="./icons8-phone-48.webp"
          alt=""
          style={{ width: 25 + "px", height: 25 + "px" }}
        />
      </div>
    </footer>
  );
}

export default FooterContent;
