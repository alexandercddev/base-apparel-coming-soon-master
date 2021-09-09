/**
 * @author: alexandercds
 * @description: 
 * @date: 08/septiembre/2021 
**/
import React, { useState } from 'react';  

const Title = (props) => {
    const { children } = props
    return (
        <div className="title">
            <h2>{children}</h2>
        </div>
    );
}

export default Title;