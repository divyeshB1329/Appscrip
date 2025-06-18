import UsIcon from "../assets/UsIcon.svg";
import InstaIcon  from "../assets/insta.svg";
import linkdin from "../assets/in.svg";
import Gpay from "../assets/pay.svg";
import card from "../assets/masterCard.svg";
import payPal from "../assets/paypal.svg";
import amex from "../assets/amexPay.svg";
import apple from "../assets/iPay.svg";
import shopPay from "../assets/shopPay.svg";
import "./footer.css";
import { MdKeyboardArrowDown } from "react-icons/md";

const Footer = () => {
  return (
    <footer>
      <div className="footMain">
        <div className="topfoot item-center">
          <div className="topLeftFoot">
            <h3>BE THE FIRST TO KNOW</h3>
            <p className="desktopPara">Sign up for updates from metta muse.</p>
            <p className="responsivePara">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio, nihil praesentium. Modi molestias eum fugiat libero
              inventore.
            </p>
            <div className="inputBtn">
              <input type="email" placeholder="Enter your e-mail..." />
              <button>SUBSCRIBE</button>
            </div>
          </div>
          <div className="topRightFoot">
            <h3>CONTACT US</h3>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
            <h3>CURRENCY</h3>
            <div className="USimg item-center">
              <img src={UsIcon} alt="USA img" />
              <li>USD</li>
            </div>
            <p>
              Transactions will be completed Euros and a currency reference is
              available on hover.
            </p>
          </div>
        </div>
        <div className="downfoot item-center">
          <div className="bottomLeftFoot item-center">
            <div className="innerLeftFoot">
              <h3>mettā muse</h3>
              <MdKeyboardArrowDown className="footDownArrow" />
              <ul>
                <li>About Us</li>
                <li>Stories</li>
                <li>Artisans</li>
                <li>Boutiques</li>
                <li>Contact Us</li>
                <li>EU Compliances Docs</li>
              </ul>
            </div>
            <div className="innerRightFoot">
              <h3>Quick Links</h3>
              <MdKeyboardArrowDown className="footDownArrow" />
              <ul>
                <li>Orders & Shipping</li>
                <li>Join/Login as a Seller</li>
                <li>Payment & Pricing</li>
                <li>Return & Refunds</li>
                <li>FAQs</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
          </div>
          <div className="bottomRightFoot">
            <div className="instaLink">
              <h3>FOLLOW US</h3>
              <MdKeyboardArrowDown className="footDownArrow" />
              <img src={InstaIcon} alt="instagram" />
              <img src={linkdin} alt="linkdin" />
            </div>
            <div className="paymentImg">
              <h3>mettā muse Accepts</h3>
              <img src={Gpay} alt="Google Pay" />
              <img src={card} alt="Master Pay" />
              <img src={apple} alt="Apple Pay" />
              <img src={payPal} alt="PayPal" />
              <img src={amex} alt="Amex Pay" />
              <img src={shopPay} alt="Shop Pay" />
            </div>
          </div>
        </div>
      </div>
      <div className="copyrightText">
        Copyright © 2023 mettamuse. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
