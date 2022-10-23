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
      <div className="contactDiv"> 
    <form className='contactForm' onSubmit={handleSubmit}>
      <input type="name" placeholder="name" name="name"></input>
     
      <input type="text" placeholder="email" name="email"></input>
      
      <input 
        type="tel"
        placeholder="Phone#"
        name="phone"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
      ></input> 
      <textarea className="textarea" type='text' placeholder="Say Something" size="50"></textarea>

      <input classNames="subButton textarea is-info" type="submit" className="submitForm"></input>
    </form>
    </div>
    </center>
  );
}
