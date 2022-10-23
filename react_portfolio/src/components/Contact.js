//Todo add contact form.

import React, { Component } from "react";

import { useForm } from "react-hook-form";

const onSubmit = (data)=>{
    console.log(data)
}

export default function ContactMe() {
  const { register, handleSubmit, errors } = useForm();
  return (
    <center>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
      <div className="contactDiv"> 
    <form className='contactForm' onSubmit={handleSubmit}>
    <div class="control">
  <input class="input is-hovered" type="text" placeholder="Name"  />
  <input class="input is-hovered" type="text" placeholder="Email"/>
  <input class="input is-hovered" type="text" placeholder="Phone#"/>
  <textarea class="textarea" placeholder="e.g. Hello world"></textarea>
  <button class="button is-info is-light is-large">Submit</button>
</div>
    </form>
    </div>
    </center>
  );
}
