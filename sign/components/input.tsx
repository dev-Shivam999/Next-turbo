"use client"
import React from 'react';


const Input = ({value,placeholder,click}:input) => {
    return (
        <input type="text" className='p-2 bg-black border-white border-2 text-white text-2xl rounded-md' value={value} placeholder={placeholder} onChange={click} />
    );
};

export default Input;