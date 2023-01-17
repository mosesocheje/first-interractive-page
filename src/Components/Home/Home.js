import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="container">
      <div className='content'>
        <div className='left-column '>
          <h1 className='heading'> Ana Enterprises</h1>
          <h2 className='heading2'>The Utmost Choice<br></br>
            To Kickstart Your Career
          </h2>
          <p className='welcome'>Welcome Back, please login to your account</p>
          <article>
            <form action="sign-up_submit" method="get" accept-charset="utf-8">
            
              <div className="email">
              <label  htmlFor="email-address">Email Address</label><br></br>
              <input type="email" name="email-address"  id="email-address"/>
              </div>
                
              <div className="password">
                <label htmlFor="password">Password</label><br></br>
                <input type="password" name="password"  id="password"/>
              </div>
              <div>
                
              </div>
              <div className=''>
                <input type="checkbox" className="rememberme" value="1" />&nbsp;Remember Me
                <a href="#0" className="forget">Forgot your password?</a><br></br>
              </div>
              
              
              <div className='buttons-container'>
                <button className='login-btn'>Login</button>
                <button className='signup-btn'>Signup</button>
              </div>     
                
              <div className="social-media">
                <p >
                  Or login with <a className='google' href="#">Google</a>    <a className='facebook' href="#">Facebook</a>   <a className='linkedin' href="#">LinkedIn </a>
                </p>
              </div>
            </form>
          </article>
        </div>
        <div className='right-column' >
          <img src='https://img.freepik.com/premium-vector/website-development-web-page-programming-coding_277904-5103.jpg?w=740'></img>

        </div>  
      </div>
      
     
    </div>
    
  );
}

export default Home;
