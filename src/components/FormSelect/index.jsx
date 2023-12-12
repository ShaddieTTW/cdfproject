import React from 'react';
import Label from '../Label';
import Select from '../Select';

function FormSelect(props) {
  return (
    <div>
      <Label text={props.label} />
      <Select options={props.data} id={props.id} styles={props.styles} onchange={props.onchange}/>
    </div>
  );
}

export default FormSelect;
