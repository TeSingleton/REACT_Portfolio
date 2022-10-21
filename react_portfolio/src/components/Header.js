import React, { Component }  from 'react';

export const Header =()=>{
    return(
        <div>
        <h1 className="Header">Svante McDaniel</h1>
        {/* <image/>  */}
        <nav className='navDiv text-white'>
          <ul className='navlist'>
            <li className='bio'><a href='#bioDiv'>Bio</a></li>
            <li className='projects'><a href='#projectDiv'>Projects</a></li>
            <li className='resume'><a href='https://docs.google.com/document/d/1ESQBtegW2ueaTjKw_Eubmul2iaKJ59k_V-OWHH92ctA/edit?usp=sharing'>Resume</a></li>
            <li className='contact'><a href='#contactDiv' >Contact Me</a></li>
        </ul>
        </nav>
        </div>
    )
}

// todo style background and font color 