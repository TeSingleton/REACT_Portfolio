//Todo add contact form.

import React, { Component } from "react";

import { useForm } from "react-hook-form";

import { Header } from "./Header";

import { useRef } from 'react';

const onSubmit = (data)=>{
    console.log(data)
}


export default function ContactMe() {
  const ref =useRef(null);

  const handleClick =()=>{
      ref.current?.scrollIntoView({behavior: 'smooth'});
  }
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
      <div className="contactDiv" id="contact" ref={ref}> 
    <form className='contactForm' onSubmit={handleSubmit}>
    <div className="control">
  <input className="input is-hovered" type="text" placeholder="Name"  />
  <input className="input is-hovered" type="text" placeholder="Email"/>
  <input className="input is-hovered" type="text" placeholder="Phone#"/>
  <textarea className="textarea" placeholder="e.g. Hello world"></textarea>
  <button className="button is-info is-light is-large">Submit</button>
</div>
    </form>
    </div>
    </center>
  );
}

// todo resize input areas