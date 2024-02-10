import React from "react";
import Navbars from "./Navbar/Navbars";
import Footer from "./Footers/Footer";

const Home = () => {
  return (
    <>
      <Navbars />

      <div>
        <img id="homepic" src="./Images/homepic.jpg"></img>
        <div id="textblock">
          <h1>ORDER LATE NIGHT MEALS</h1>
          <button id="orderbtn">Order Now</button>
          <h4 id="heador">Or</h4>
          <img id="playstore" src="./Images/gplay.jpg"></img>
          <img id="appstore" src="./Images/appstore.jpg"></img>
          <img id="chatbot" src="./Images/chatbot.jpg"></img>
        </div>
      </div>

      <div id="homebg2">
        <h2 id="featurestxt">Features</h2>
        <img id="featuresimg" src="./Images/features.jpg"></img>
      </div>

      <div>
        <img id="homepic2" src="./Images/homepic2.jpg"></img>
        <div id="textblock2">
          <h1>ENJOY FOOD, ENJOY LIFE!</h1>
        </div>

        <div>
          <img id="homepic3" src="./Images/homepic3.jpg"></img>
          <div id="textblock3">
            <h1>BURGERS, FRIES, SHAKES AND MANY MORE</h1>
          </div>
        </div>

        <div id="homebg3">
          <h2 id="connecttxt">Connect With us</h2>
          <p className="para">
            Enter your email address below to be the first to know <br />
            everything about us, where we’ll be next,
            <br /> and how you can come along! <br />
            Join us on our adventure.
          </p>
          <input
            id="textbox"
            type="textbox"
            placeholder="Enter your email address "
          />

          <h4 id="contactus">Contact us</h4>
          <ul className="list">
            <li>info@knight-bite.com</li>
            <li>+91 8047106107</li>
          </ul>

          <h4 id="quicklinks">Quick Links</h4>
          <ul className="list2">
            <li>Delivery Policies</li>
            <li>Privacy Policies</li>
            <li>Careers (Coming soon)</li>
            <li>Franchise</li>
          </ul>
        </div>

          <h4 id="headoffice">Head Office</h4>
          <p className="para2">
            1st Floor, No 20-1-7/10, Regal Square Azizuddin Road,<br /> Bunder
            Mangalore, Bunder, Mangaluru,<br /> Dakshina Kannada, Karnataka, 575001
          </p>

          <h4 id="location">Locations</h4>
          <ul className="list3">
             <li>Bengaluru, Mangalore</li>
             <li>Mysuru, Hubli</li>
             <li>Hyderabad, Manipal</li>
             <li>Udupi</li>
          </ul>

          <h4 id="followus">Follow us</h4>
          <img id="soc1" src="./Images/youtube.jpg"/>
          <img id="soc2" src="./Images/linkedin.jpg"/>
          <img id="soc3" src="./Images/twitter.jpg"/>
          <img id="soc4" src="./Images/fb.jpg"/>
          <img id="soc5"src="./Images/insta.jpg"/>
      </div>
      <br /><br /><br /><br /><br />
      <Footer/>
     
    </>
  );
};

export default Home;
