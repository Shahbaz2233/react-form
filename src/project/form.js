import React, { useState } from 'react';
import "./form.css";

function Form() {


  let [text, setText] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });
  
  function addEvent(event) {
    let { value, name } = event.target;
    setText((prev) => { 
      return {
        ...prev,
        [name]: value
      }
    })
}

function onClicks(){
  
}

  //   (prev) => {
  //   if (name === "firstName") {
  //     return {
  //       firstName: value,
  //       lastName: prev.lastName,
  //       email:  prev.email,
  //       password:  prev.password
  //     }
  //   }
  //   else if(name === "lastName") {
  //     return {
  //       lastName: value,
  //       firstName: prev.firstName,
  //       email:  prev.email,
  //       password:  prev.password
  //     }
  //   }
  //   else if(name === "email") {
  //     return {
  //       lastName: prev.lastName,
  //       firstName: prev.firstName,
  //       email: value,
  //       password:  prev.password
  //     }
  //   }
  //   else if(name === "password") {
  //     return {
  //       lastName: prev.lastName,
  //       firstName: prev.firstName,
  //       email:  prev.email,
  //       password:  value
  //     }
  //   }
  // }


  return (
    <>
      <div className='container'>
        <div className='main-container'>
          <h1>Hello {text.firstName} {text.lastName} </h1>
          <p>{text.email}</p>
          <p>{text.password}</p>

          <form >
            <div className='input'>
              <input type="text"
                name='firstName'
                placeholder="enter first name"
                onChange={addEvent}
                value={text.firstName}
                autoComplete="off"
              ></input>
            </div>
            <div className='input'>
              <input type="text"
                placeholder="enter last name"
                name='lastName'
                onChange={addEvent}
                value={text.lastName}
                autoComplete="off"
              ></input>
            </div>
            <div className='input'>
              <input type="email"
                placeholder="abc@gmail.com"
                name='email'
                onChange={addEvent}
                value={text.email}
                autoComplete="off"
              ></input>
            </div>
            <div className='input'>
              <input type="password"
                placeholder="password"
                name='password'
                onChange={addEvent}
                value={text.password}
                autoComplete="off"
              ></input>
            </div>
            <button onClick={onClicks}>Search</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Form