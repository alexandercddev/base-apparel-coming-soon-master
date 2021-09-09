/**
 * @author: alexandercds
 * @description: 
 * @date: 08/septiembre/2021 
**/
import React, { useState } from 'react';  

const Image = (props) => {
    const { image, name } = props
    return (
        <div className="image">
            <img 
                alt={name === undefined ? 'default' : name} 
                width="" 
                height="" 
                src={image} />
        </div>
    );
}

export default Image;