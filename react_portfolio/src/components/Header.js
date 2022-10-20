import React, { Component }  from 'react';

export const Header =()=>{
    return(
        <div>
        <h1 className="Header">Svante McDaniel</h1>
          <ul className='navlist'>
            <li className='bio'>Bio</li>
            <li className='projects'>Projects</li>
            <li className='resume'>Resume</li>
            <li className='contact'>Contact</li>
        </ul>
        </div>
    )
}

// todo style background and font color 