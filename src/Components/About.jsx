import React from "react";
import Navbars from "./Navbar/Navbars";
import Footer from "./Footers/Footer";

const About = () => {
  return (
    <>
      <Navbars />
      <div>
        <img
          style={{ height: 620, width: 1349 }}
          src="./Images/aboutpic1.jpg"
        ></img>
        <div id="abttxt1">
          <h4 id="abthead1">
            KNIGHT BITE IS A CLOUD KITCHEN WHICH
            <br /> DELIVERS FOOD TO THE NOCTURNALS
            <br />
            GIVING EQUAL EMPHASIS ON FOOD, <br />
            TECHNOLOGY AND LOGISTICS.
          </h4>
          <img id="chatbot" src="./Images/chatbot.jpg"></img>
        </div>
      

      <p id="abttxt2">
        Knight Bite started with the idea to serve all the hungry nocturnals
        <br /> who find it really difficult to order late night muchies. KB
        brought
        <br />
        together late night eaters and helped them order delicious meals <br />
        at their convenience via Knight Bite App and call.
      </p>
      <img
        style={{
          position: "absolute",
          left: 60,
          top: 650,
          height: 170,
          width: 500,
        }}
        src="./Images/aboutpic2.jpg"
      />

      <img
        src="./Images/aboutpic3.jpg"
        style={{ position: "absolute", top: 850, left: 610 }}
      />
      <p id="abttxt3">
        Knight Bite is one such concept which was highly successful
        <br /> in adapting to the emerging market. Biters (customers),
        <br /> accepted and loved the KB app that made the ordering
        <br /> process much more easier. In two weeks of the release
        <br /> of the app, it was trending on top food apps and was
        <br /> downloaded by more than 5000 users across Mangalore <br />
        and Manipal.
      </p>
    
      <img
        src="./Images/aboutpic4.jpg"
        style={{ position: "absolute", top: 1350, left: 60 }}
      />
      <p id="abttxt4">
        Going forward, our aim is to help and bring smiles <br />in many more faces
        and cover many more cities <br />across India and around the world.
      </p>
       <h4 id="abtfollowus">Follow us</h4>
          <img id="abtsoc1" src="./Images/youtube.jpg"/>
          <img id="abtsoc2" src="./Images/linkedin.jpg"/>
          <img id="abtsoc3" src="./Images/twitter.jpg"/>
          <img id="abtsoc4" src="./Images/fb.jpg"/>
          <img id="abtsoc5"src="./Images/insta.jpg"/>

        <h4 id="abtlocation">Locations</h4>  
        <ul id="abttxt5">
            <li>Bengaluru Hours: 7:00 pm - 4:00 am</li>
            <li>Mangalore Hours: 7:00 pm - 4:00 am</li>
            <li>Mysuru Hours: 7:00 pm - 4:00 am</li>
            <li>Hyderabad Hours: 7:00 pm - 4:00 am</li>
            <li>Hubli Hours: 7:00 pm - 4:00 am</li>
            <li>Manipal Hours: 7:00 pm - 4:00 am</li>
        </ul>
        </div>


      <div id="abtfooter">
       <Footer/> 
       </div>
    </>
  );
};

export default About;
