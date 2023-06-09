import React, { useState, useHistory, useEffect } from 'react';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import '../../login/patient-login/patientlogin.css'
import { History, useNavigate } from 'react-router-dom';






const DoctorLoginForm = () => {


    const navigate = useNavigate();
    // useEffect(() => {
    //     if (localStorage.getItem('user-info')) {
    //         history.push("/patientdashboard")
    //     }

    // },[]);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);


  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const inputStyle = {
    background: 'none',
    // Set different styles when hovered
    ...(isHovered && {
      background: 'none',
      color: '#1565C0',
    }),
  };


  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const signIn = async (e) => {
    e.preventDefault();

    if (!email && !password) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      const response = await fetch('https://vitals-8myt.onrender.com/vitals/doctors/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const docData = await response.json();

      console.log(docData);

      if (docData.token) {
        // Authentication successful, customize user experience
        console.log(docData.message);
        console.log("Success");
        setMessage('Login Successful')
        localStorage.setItem("doctor", (docData.token));
        // let token = localStorage.getItem("user-info");
        navigate("/doctordashboard")

      } else {
        setError('Doctor does not exist');
      }
    } catch (error) {
      setError(error.message);
    }


};



    return(
        <div>
            {message && <p className='error-success'>{message}</p>}
            {error && <p className='error-text'>{error}</p>}
            <form onSubmit={signIn} className='login-form'>
            
                    <div className='right-input'>
                        <p>Email address</p>
                        <div className='rightside-input'>
                            <input
                                type="email" 
                                placeholder='e.g name@example.com'
                                onChange={(e) => setEmail(e.target.value)}
                            /> 
                                 
                            <EmailOutlinedIcon/></div>
                    </div>
                    
                    <div className='right-input'>
                        <p>Password</p>
                        <div className='rightside-input'>
                            <input
                                type={passwordVisible ? 'text' : 'password'} 
                                placeholder='xxxxxxxx' 
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <VisibilityOffOutlinedIcon onClick={handlePasswordVisibility} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={inputStyle} /></div>
                    </div>
                    <div className='right-box' >
                        <div className='right-checkbox'>
                            <input type="checkbox" value='remember' />
                            <p>Remember Me</p>
                        </div>
                        <p>Forgot Password?</p>

                    </div>

                    <button type='submit' >LOGIN</button>
                    
                </form>
        </div>
        )
  };


  


  export default DoctorLoginForm;