import React from 'react';

function Label(props) {
  return (
    <div>
      <label className='text-slate-500 uppercase'>{props.text}</label>
    </div>
  );
}

export default Label;
