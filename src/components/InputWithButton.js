/**
 * @author: alexandercds
 * @description: 
 * @date: 08/septiembre/2021 
**/
import React, { useState } from 'react';  
import { useForm } from 'react-hook-form';

const InputWithButton = (props) => {
    const { placeholder, name, type, required, message } = props
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        alert(`Send email ${data.email}`);   
    }
    return (
        <div className="input-with-button">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    placeholder={placeholder} 
                    className="input" 
                    type={type && 'text'} 
                    message={message}
                    {...register(name, { 
                        required: {
                            value: required, 
                            message: "This is required"
                        },
                        pattern: {
                            value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i, 
                            message: "Please provide a valid email"
                        }
                    })}/> 
                <input 
                    className="btn arrow" 
                    type="submit" value=""/>
            </form> 
            <div className="content-error">
                <Error errors={errors} validate="required" name={name}/>
                <Error errors={errors} validate="pattern" name={name}/> 
            </div>
        </div>
    );
} 

const Error = (props) => {
    const { errors, validate, name } = props;
    return (
        errors?.[name] && errors?.[name].type === validate ? ( 
            <span className="error">{errors?.[name].message}</span>
        ) : (
            null
        )
    )
}

export default InputWithButton;