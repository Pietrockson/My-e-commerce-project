import React from 'react';
import './Sign-In-And-Sign-Up.scss';
import SignIn from '../../components/Sign-In-Component/Sign-In'
import SignUp from '../../components/sign-up-component/Sign-up';

const SignInAndSignUp = () => (
  <div className='sign-in-and-sign-up'>
    <SignIn/>
    <SignUp/>
  </div>
);

export default SignInAndSignUp;