import React from "react";
import header from './Header.module.css';

const Header = (props) => {
  return (
    <div className='header'>
      <header>
        <img src='https://www.vip-nickname.ru/files/upload_gen_img/en_bukva_niki_v.jpg'/>
      </header>
      <span className='name'>Vseti</span>
    </div>
  )
}

export default Header;