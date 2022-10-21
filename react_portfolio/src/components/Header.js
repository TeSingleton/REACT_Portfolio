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
            <li className='resume'><a>Resume</a></li>
            <li className='contact'><a>Contact Me</a></li>
        </ul>
        </nav>
        </div>
    )
}

// todo style background and font color 