import React, { Component }  from 'react';
import GithubIcon from "../images/iconmonstr-github-2-24.png"
import TwitterIcon from "../images/iconmonstr-twitter-2-24.png"
import LinkedinIcon from "../images/iconmonstr-linkedin-2-24.png"
export const Footer =()=>{
    return(
        <footer className="Footer"> 
        <ul>
            <li className='github '><a href='https://github.com/TeSingleton'><img className='githubIcon' src={GithubIcon} />GitHub</a></li>
            
            <li className='linkedin'><a href='https://twitter.com/BigTe_'><img className='linkedIcon' src={LinkedinIcon}/>Linkedin</a></li>

            <li className='twitter'><a href='https://www.linkedin.com/in/svanté-singleton-mcdaniel-90328260/'><img className='twitterIcon' src={TwitterIcon}/>Twitter</a></li>
        </ul>Created With ❤️ by Dop.r Web Products</footer>
    )
}