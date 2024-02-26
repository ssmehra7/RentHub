import React, { useState } from 'react'


import axios from "axios";

export default function About() {
 
  
  const [email,setEmail] = useState("");
  const [name,setName] = useState("");
  const [message,setMessage] =  useState("");
  
  const handleClick = () => {
    console.log(email,name,message);
    axios.post("http://localhost:3000/api/user/contactus",{
      email,
      name,
      message
    }).then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div className='flex justify-center items-center gap-4'>
    <div className='w-1/2'>
    <div className='mx-auto w-1/2 flex flex-col gap-3'>
    <div className='text-3xl font-bold'>Contact Us</div>
    <div className='flex flex-col gap-5'>
    <input onChange={(e)=>{
      setName(e.target.value)
    }} className='border p-3 rounded-lg' placeholder='Name'/>
      <input onChange={(e)=>{
      setEmail(e.target.value)
    }} className='border p-3 rounded-lg ' placeholder='Email'/>
      <textarea onChange={(e)=>{
      setMessage(e.target.value)
    }} className='border p-3 rounded-lg' rows='5' placeholder='Message' />
      <button onClick={handleClick} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Send</button>
    </div>
      
    </div>
      
      
    </div>
      <div className='w-1/2 py-20 px-4 flex-wrap'>
      <h1 className='text-3xl font-bold mb-4 text-slate-800'>About <span className='text-slate-500'>Rent</span>Hub</h1>
      <p className='mb-4 text-slate-700'>We believe in the power of simplicity when it comes to finding and listing rental properties</p>
      <p className='mb-4 text-slate-700'>
      Our platform is dedicated to creating an effortless and efficient experience for both landlords looking to fill vacancies and tenants in search of their ideal living spaces.
      </p>
      <p className='mb-4 text-slate-700'>Our team of agents has a wealth of experience and knowledge in the real estate industry, and we are committed to providing the highest level of service to our clients. We believe that buying or selling a property should be an exciting and rewarding experience, and we are dedicated to making that a reality for each and every one of our clients.</p>
    </div>
    </div>
  )
}
