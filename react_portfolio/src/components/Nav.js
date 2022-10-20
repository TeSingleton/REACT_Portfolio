import React, { Component }  from 'react';

export const Nav=()=>{
    return (
        <ul className='navlist'>
            <li className='bio'>Bio</li>
            <li className='projects'>Projects</li>
            <li className='resume'>Resume</li>
            <li className='contact'>Contact</li>
        </ul>
    )
}

// todo style each nav item and add href a tag links to specified items.

// todo consolidate the nav into the header component