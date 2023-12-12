import React from 'react';

function Select(props) {
  var style = 'input-sharp '+props.styles;
  var options = props.options ? props.options : []
  return (
    <div>
      <select className={style} id={props.id} onChange={props.onchange}>
        {options.map((i,v)=>(
          <option key={v} value={i.id}>{i.text}</option>
        ))}
      </select>
    </div>
  );
}

export default Select;
