//Todo add contact form.

import React, { Component } from "react";

import { useForm } from "react-hook-form";

export default function ContactMe() {
  const { register, handleSubmit, errors } = useForm();
  return (
    <form onSubmit={handleSubmit}>
      <input type="name" placeholder="name" name="name"></input>
      <input type="text" placeholder="email" name="email"></input>
      <input
        type="tel"
        placeholder="Phone#"
        name="phone"
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
      ></input>

      <input type='submit'></input>
    </form>
  );
}
