/**
 * @author: alexandercds
 * @description: 
 * @date: 08/septiembre/2021 
**/
import React, { useState } from 'react';  

const Paragraph = (props) => {
    const { children } = props
    return (
        <div className="paragraph">
            <p>{children}</p>
        </div>
    );
}

export default Paragraph;