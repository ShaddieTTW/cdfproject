import React from 'react';

function Button(props) {
  var style ='button-sharp '+ props.styles;
  return (
    <div>
      <button type={props.type} id={props.id} onClick={props.onclick} className={style}>{props.text}</button>
    </div>
  );
}

export default Button;
