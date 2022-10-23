import React, { Component }  from 'react';
import NameLogo from "../images/namelogo.png"
export const Header =()=>{
    return(
      <div className="container">
  <div className="notification is-primary">
  <nav className="level">
  <p className="level-item has-text-centered bio">
  <a href='#bioDiv'>Bio</a>
  </p>
  <p className="level-item has-text-centered projects">
  <a href='#projectDiv'>Projects</a>
  </p>
  <p className="level-item has-text-centered name_logo">
    <img src={NameLogo} alt="Svante" />
  </p>
  <p className="level-item has-text-centered resume ">
  <a href='https://docs.google.com/document/d/1ESQBtegW2ueaTjKw_Eubmul2iaKJ59k_V-OWHH92ctA/edit?usp=sharing'>Resume</a>
  </p>
  <p className="level-item has-text-centered contact">
  <a href='#contactDiv' >Contact Me</a>
  </p>
</nav>
  </div>
</div>
    )
}

// todo style background and font color 