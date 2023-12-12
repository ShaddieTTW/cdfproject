import React from 'react';
import Logo from '../../components/Logo';
import SharpTextBox from '../../components/SharpTextBox';
import bg from "./bg.png"
import Avatar from '../../components/Avatar';
function MidBar() {
  return (
    <div class="mid-bar flex items-center all-width">
      <img src={bg} alt=""/>
      <div className='all-width mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex justify-between mid-content'>
        <div>
          <Logo theme="grey-color" large={true} root="/"/>
        </div>
        <div>
          <div className="flex justify-end" >
             <Avatar/>
          </div>
          <div className='flex item-center'>
              <span></span>
              <SharpTextBox placeholder="Search...." search={true} />
          </div>
        </div>
        
      </div>

    </div>
  );
}

export default MidBar;
