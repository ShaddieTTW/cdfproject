import React from 'react';
import zaming from "../../static/zam.jpg";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsWhatsapp } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function TopBar() {
  return (
    <div className='top-bar-slim all-width'>
      <div className='all-width mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex justify-between'>
        <div class="top-bar-slim-img flex gap-x-3 items-center">
          <img src={zaming} alt="Zambia"/>
          <span>Zambia | Officail CDF website</span>
        </div>
        <div className='flex gap-x-3 items-center'>
          <Link to=""> <BsFacebook/></Link>
          <Link to=""> <BsTwitter /></Link>
          <Link to=""> <BsLinkedin/></Link>
          <Link to=""> <BsWhatsapp/></Link>
          <Link to=""> <BsInstagram/></Link>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
