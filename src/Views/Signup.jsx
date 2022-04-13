import React from 'react'
import '../App.css';
import { useState } from 'react';
import { signUp } from '../utils/request';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    let navigate = useNavigate();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = async (e) => {

      e.preventDefault();
      try{
      await signUp(name, email);
     }catch(error){
       throw error;
     }
     setName('')
     setEmail('');
     navigate('/confirmation', { replace: true });
    }


      return (
        <>
        <div className='container'>
        <div className='image-container'>
          <img src='nyfl2.png' alt='logo' />
        </div>
        <div>

        <p className='copy'>Enter your email below to receive the latest product drops🫒,🥥,🍯, promotions, and FREE 🤌🏾 💎 Game from the New York Flower League.

    </p>
    <p className='follow'> Follow NYFL on Instagram <a href='https://www.instagram.com/newyorkflowerleague/'><img src='instagram2.png' alt='ig' className='ig'/></a> </p>

    </div>
        <div className='form-container'>
             <form onSubmit={(e) => handleSubmit(e)}>
               <label htmlFor='name'> Name: </label>
               <input type='text' id='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Name' required/>
               <label htmlFor='email'>Email:</label>
               <input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' required/>
               <button type='submit'> Tap in with 💐NYFL💐</button>
             </form>
        </div>

        </div>
        </>
      );
}
