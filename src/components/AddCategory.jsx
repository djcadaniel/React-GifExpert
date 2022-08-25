import React, { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {

  const[inputValue, setInputValue] = useState('');

  //Función para cambiar input
  const onInputChange = ({target}) =>{
    console.log(target.value);
    setInputValue(target.value);
  }
  //Función para cambiar array
  const onSubmit2 = (event)=>{
    event.preventDefault();
    if(inputValue.trim().length <= 1) return;
    
    onNewCategory(inputValue.trim());
    setInputValue('');
  }


  return (
    <form onSubmit={onSubmit2}>
      <input 
        type = 'text'
        placeholder='Buscar gifs'
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}