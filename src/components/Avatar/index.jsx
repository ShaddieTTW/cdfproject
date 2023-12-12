import React from 'react';
import {BsPower } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Avatar(props) {
  return (
    <>
      <div className='flex items-center gap-4'>
        <div className='flex flex-col profile-text'>
          <span>Shadrick Mwamba Mukuka</span>
          <span>349670/65/1</span>
        </div>
        <div className='avatar'>
          <img src="" alt=""/>
        </div>
        <Link>
          <BsPower/>
        </Link>
      </div>
    </>
  );
}

export default Avatar;
