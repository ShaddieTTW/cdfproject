import React from 'react';

function TextBox(props) {
  var style = 'input-sharp '+props.styles;
  return (
    <div>
      <input onKeyUp={props.onkeyup} onKeyDown={props.onkeydown} pattern={props.pattern} type={props.type} id={props.id} onChange={props.onchange} placeholder={props.placeholder} className={style} value={props.value} />
    </div>
  );
}

export default TextBox;
