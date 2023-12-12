import React, { useState } from 'react';
import TextBox from '../TextBox';

function NrcTextBox(props) {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');

  const maxLength1 = 6; // Set the maximum number of characters for input1
  const maxLength2 = 2; // Set the maximum number of characters for input2
  const maxLength3 = 1; // Set the maximum number of characters for input3

  const handleChange1 = (e) => {
    if (e.target.value.length <= maxLength1) {
      setInput1(e.target.value);
    }
  };

  const handleChange2 = (e) => {
    if (e.target.value.length <= maxLength2) {
      setInput2(e.target.value);
    }
  };

  const handleChange3 = (e) => {
    if (e.target.value.length <= maxLength3) {
      setInput3(e.target.value);
    }
  };
  return (
    <div className='flex gap-2 items-center justify-stretch w-full'>
  
        <TextBox
          type="number"
          id={props.id1}
          styles="no-spin grow"
          value={input1}
          onchange={handleChange1}
        />
        /
        <TextBox
          type="number"
          id={props.id2}
          value={input2}
          styles="no-spin w-full"
          onchange={handleChange2}
        />
        /
        <TextBox
          type="number"
          id={props.id3}
          styles="no-spin w-full"
          value={input3}
          onchange={handleChange3}
        />
    </div>
  );
}

export default NrcTextBox;
