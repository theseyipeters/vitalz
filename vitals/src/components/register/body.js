import React from 'react'
import './register.css'
import { Link } from 'react-router-dom'
import hospital from '../../images/hospitale.svg'
import doctor from '../../images/doctore.svg'
import patient from '../../images/patiente.svg'

export default function Body() {
  return (
    <div>
        <div className='body-container'>
            <div className='body-text'>
                <h3>Welcome to Vitals</h3>
                <p>Introducing our cutting-edge EMR software: Empower your healthcare practice with seamless digital efficiency. </p>
            </div>
            <div className='body-box-container'>
              <Link to={'/hcp-register'} className='body-link'><div className='body-box'>
                  <img className='login-imgs' src={hospital} alt='' />
                  <p>Register as a Hospital</p>
              </div></Link>
              <Link to={'/doctor-register'} className='body-link'><div className='body-box'>
                  <img className='login-imgs' src={doctor} alt='' />
                  <p>Register as a Doctor</p>
              </div></Link>
              <Link to={'/patient-register'} className='body-link'><div className='body-box'>
                  <img className='login-imgs' src={patient} alt='' />
                  <p>Register as a Patient</p>
              </div></Link>

            </div>

            <button className='nav-btn'><Link to={'/login'} className='login'>Already have an account? <span>Login</span></Link></button>

        </div>
    </div>
  )
}
