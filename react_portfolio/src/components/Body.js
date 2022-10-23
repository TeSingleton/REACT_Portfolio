import React, { Component } from "react";

export const Body = () => {
  return (
    <div class="tile is-ancestor">
  <div class="tile is-vertical is-8">
    <div class="tile">
      <div class="tile is-parent ">
        <article class="tile is-child box">
          {/* <!-- Put any content you want --> */}
          <p >
          <a href="https://github.com/TeSingleton/TS-Code">
            <img className="projectImg " src="https://user-images.githubusercontent.com/104960721/196360296-cf70aa2b-c48c-4ad2-bfba-63231bd28169.png" />
            PWA Text Editor
          </a>
        </p>
          
        </article>
        <article class="tile is-child box">
          {/* <!-- Put any content you want --> */}
          <p >
          <a href="https://github.com/TeSingleton/Inscription_Notepad">
            <img className="projectImg" src="https://user-images.githubusercontent.com/104960721/196312501-47fb6f19-b319-40d6-b97c-62096e6e660b.png" />
            Express Notes App
          </a>
        </p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          {/* <!-- Put any content you want --> */}
          <p >
          <a href="https://github.com/TeSingleton/Associate-Profile-Generator">
            <img className="projectImg" src="https://user-images.githubusercontent.com/104960721/194971073-3410c2e7-8756-4eb0-8e7e-c6000243ecb4.png" />
            Associate Profile Generator
          </a>
        </p>
        </article>
        <article class="tile is-child box">
          {/* <!-- Put any content you want --> */}
          <p >
          <a href="https://github.com/TeSingleton/DearME_Readme_Generator">
            <img className="projectImg" src="https://miro.medium.com/max/640/1*LTwMX4zzxIVA7hvLG8qJVw.jpeg" />
            README Generator
          </a>
        </p>
        </article>
        
      </div>
    </div>
   
  </div>
  <div class="tile is-parent">
    <article class="tile is-child box">
      {/* <!-- Put any content you want --> */}
      <p >
          <a href="https://github.com/TeSingleton/7D-Work-Day-Planner">
            <img className="projectImg" src="https://github.com/TeSingleton/7D-Work-Day-Planner/raw/main/Assets/images/Screen%20Shot%202022-07-14%20at%205.43.17%20PM.png" />
            Work Planner
          </a>
        </p>
    </article>
    <article class="tile is-child box">
          {/* <!-- Put any content you want --> */}
          <p >
          <a href="https://github.com/TeSingleton/The-Doppler/blob/main/README.md">
            <img className="projectImg" src="https://user-images.githubusercontent.com/104960721/197368772-16bb51e5-e164-4ce5-9cde-66e4b2477c2f.png" />
            Weather App
          </a>
        </p>
        </article>
    
  </div>
</div>
  );
};

// todo add links and photos to each project
