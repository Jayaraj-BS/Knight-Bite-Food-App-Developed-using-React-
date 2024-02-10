import React from 'react'
import Navbars from './Navbar/Navbars'
import Footer from './Footers/Footer'

const Menu = () => {
  return (
    <>
    <Navbars/>
    <div>
        <img id = "menubg" src="./Images/menupic1.jpg" />
        <img id="chatbot" src="./Images/chatbot.jpg"></img>

        <img id='menu1' src="./Images/maincourse.webp" />
        <h3 id='menuhead1'>MAIN COURSE</h3>

        <img id='menu2' src="./Images/fries.webp" />
        <h3 id='menuhead2'>FRIES/STARTERS</h3>

        <img id='menu3' src="./Images/burger.jpg" />
        <h3 id='menuhead3'>BURGERS</h3>

        <img id='menu4' src="./Images/desserts.jpg" />
        <h3 id='menuhead4'>DESSERTS</h3>

        <img id='menu5' src="./Images/wraps.jpg" />
        <h3 id='menuhead5'>WRAPS</h3>

        <img id='menu6' src="./Images/drinks.jpg" />
        <h3 id='menuhead6'>DRINKS</h3>

        <Footer/>




    </div>

    </>
  )
}

export default Menu