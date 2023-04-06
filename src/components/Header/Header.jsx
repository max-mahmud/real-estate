import './Header.css'
import logo from '../../../public/logo.png'
import { AiOutlineMenuFold } from "react-icons/ai";
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

const Header = () => {
  const [openMenu, setOpenMenu]= useState(false)

  const getMenuStyles=(openMenu)=>{
    if(document.documentElement.clientWidth <=992){
      return {right: !openMenu && "-300px"}
    }
  }
  return (
    <section className='container-fluid '>
      <div className="flexCenter paddings  h-container">
        <img src={logo} alt="Logo" width={100} />

        <div className="h-menu">
          <OutsideClickHandler  onOutsideClick={()=>{setOpenMenu(false)}}>
          <div className="h-menu-wrapper flexCenter" style={getMenuStyles(openMenu)}>
           <a href="">Residencies</a>
            <a href="">Our Value</a>
            <a href="">Contact Us</a>
            <a href="">Get Started</a>
            <button className='button'>
            <a href="">Contact</a>
            </button>
           </div>
          </OutsideClickHandler>

            <div className="menuIcon" onClick={()=>setOpenMenu((prev)=>!prev)} >
              <span ><AiOutlineMenuFold /></span>
            </div>
        </div>
      </div>
    </section>


  )
}

export default Header
