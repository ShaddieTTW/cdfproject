import React from 'react';
import { Link } from 'react-router-dom';

function SharpButton(props) {
  var style ='button-sharp '+ props.styles;
  return (
    <Link to={props.to} id={props.id} onClick={props.onclick} className={style}>
      {props.text}
    </Link>
  );
}

export default SharpButton;
