import React, { Component }  from 'react';
import GithubIcon from "../images/iconmonstr-github-2-24.png"
import TwitterIcon from "../images/iconmonstr-twitter-2-24.png"
import LinkedinIcon from "../images/iconmonstr-linkedin-2-24.png"
import NameLogo from "../images/namelogo2.png"
export const Footer =()=>{
    return(
        <footer className="footer">
        <div className="content has-text-centered footer2">
        <img src={NameLogo} alt="Svante" />
        
        <p className='github '><a href='https://github.com/TeSingleton'><img className='githubIcon' src={GithubIcon} alt="github logo"  /></a></p>
            
            <p className='linkedin'><a href='https://twitter.com/BigTe_'><img className='linkedIcon' src={LinkedinIcon} alt="linkedin logo" /></a></p>

            <p className='twitter'><a href='https://www.linkedin.com/in/svanté-singleton-mcdaniel-90328260/'><img className='twitterIcon' src={TwitterIcon} alt="twitter logo"/></a></p>

            
        </div>
      </footer>
    )
}

// todo adjust size of the footer