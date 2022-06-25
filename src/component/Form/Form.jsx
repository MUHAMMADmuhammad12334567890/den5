import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './form.css'

const Form = () => {
    const [text, setText] = useState('')
    const dispatch = useDispatch()


    const handletextValue = (e) => {
    setText(e.target.value)

    }

    const  handleClick = (e) => {
    e.preventDefault()
    
    dispatch({type: 'add', payload: text} )
  
    setText('')
   
    }

    
      return (
       
        <div>
            <form action="">
                <input className='input_value' type="text" value={text} onChange={(e) => handletextValue(e)} />
                <input type="submit" onClick={(e) =>  handleClick(e)} disabled={!text} />
            </form>
        </div>
      
    );
};

export default Form;