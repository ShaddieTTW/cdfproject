import React from 'react';
import Label from '../Label';
import TextBox from '../TextBox';
import NrcTextBox from '../NRCTextBox';

function FormField(props) {
  return (
    props.nrc ?
    <div>
      <Label text={props.label}/>
      <NrcTextBox type={props.type} onkeyup={props.onkeyup} id1={props.id1} id2={props.id2} id3={props.id3} styles={props.styles}/>
    </div>
   
    :
    <div>
       <Label text={props.label}/>
       <TextBox type={props.type} onkeyup={props.onkeyup} id={props.id} styles={props.styles}/>
    </div>
  );
}

export default FormField;
