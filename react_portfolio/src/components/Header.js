import React, { Component }  from 'react';

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
    {/* todo add bulma styling to the Avi */}
    <img className='bioAvi' src='https://avatars.githubusercontent.com/u/104960721?v=4'/>
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
// todo connect links to the proper elements