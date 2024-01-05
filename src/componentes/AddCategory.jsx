import React from 'react'
import { useState } from 'react'

export const AddCategory = ( { onNewCategory } ) => {
    const [inputValue, setInputValue] = useState('one punch')
    const onInputChange =(Event)=>{
        setInputValue(Event.target.value)
    }

    const onSubmit=(event)=>{
        event.preventDefault();
        if(inputValue.trim().length<=1)return;
        onNewCategory(inputValue.trim())
        setInputValue("");

    }
  return (
    <form onSubmit={(event)=>onSubmit(event)}>
    
    <input type="text" 
    placeholder='Buscar gifs'
    value={inputValue}
    onChange={onInputChange}/>
    
    </form>
  )
}
