import React from 'react'
import {Link} from 'react-router-dom'
import './Signup.css'

function Signup() {
  return (
    <div className='signup'>
      <div className='signup__box'>
        <h2 className='signup__title'>Signup to create an account</h2>
        <p className='signup__text'>
          Already have an account ?
          <Link className='text-decoration-none' to='/Login'><span className='signup__signup ms-2'>Login</span></Link>
        </p>
        
        <form className='form'>
          <div className='d-flex flex-column'>
            <input className='form__input' name='username' required type="text" placeholder='Username'/>
            <input className='form__input' name='email' required type="email" placeholder='Email'/>
            <input className='form__input' name='password' required type="password" placeholder='Password'/>
            <input className='form__input' name='confirm' required type="password" placeholder='Confirm password'/>

            <button className='form__btn' type='submit'>Signup</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup