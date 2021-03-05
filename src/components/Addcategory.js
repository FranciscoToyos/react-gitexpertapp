import React, { useState } from 'react'
import PropTypes from 'prop-types'


export const Addcategory = ({setCategorias}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) =>{
        setInputValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(inputValue.trim().length > 2) {
            setCategorias(cat => [inputValue,...cat]);
            setInputValue(' ')

        }
        // setCategorias
    }

    return (
        
        <form onSubmit= {handleSubmit}>
           <input
            type ='text'
            value = {inputValue}
            onChange = { handleInputChange }
            />
        </form>
        
    )
}

Addcategory.propTypes = {
    setCategorias : PropTypes.func.isRequired
}
