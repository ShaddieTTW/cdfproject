import React from 'react';
import { BsSearch } from 'react-icons/bs';

function SharpTextBox(props) {
  return (
    props.search ?
    <div className='input-sharp'>
      <input type={props.type} placeholder={props.placeholder} className='input-none'  value={props.value} />
      <button>
        <BsSearch/>
      </button>
    </div>
    :
    <div>
      <input type={props.type} placeholder={props.placeholder} className='input-sharp' value={props.value} />
    </div>
  );
}

export default SharpTextBox;
