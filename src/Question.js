import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ id, title, info }) => {
  const [show, setShow] = useState(false);

  const toggleIcon = () => {
    setShow(!show);
  };
  return (
    <section className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={toggleIcon}>
          {show ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </header>
      {show && <p>{info}</p>}
    </section>
  );
};

export default Question;
