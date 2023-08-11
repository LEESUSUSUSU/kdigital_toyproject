import React, { useState } from 'react';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import axios from 'axios';
import './LoginCss.css';
import {LoginAtoms} from './Atoms/LoginAtoms'
import { useRecoilState } from "recoil";




const Loginpage = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState('');
  const [loginstate, setLoginstate] = useRecoilState(LoginAtoms);

  const handleLoginModalOpen = () => {
    setShowLoginModal(true);
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
  };

  const handleLoginModalClose = () => {
    setShowLoginModal(false);
  };

  const handleSignupModalOpen = () => {
    setShowSignupModal(true);
  };

  const handleSignupModalClose = () => {
    setShowSignupModal(false);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setShowLoginModal(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginstate(0);
  };

  return (
    <div className='loginpage'>
      {loginstate == 1 ? (
        <button type="button" className="logout-button" onClick={handleLogout}>
          로그아웃
        </button>
      ) : (
        <>
          <div className="buttons">
          <button type="button" className="login-button" onClick={handleLoginModalOpen}>
            로그인
          </button>
          <button type="button" className="signup-button" onClick={handleSignupModalOpen}>
            회원가입
          </button>
          </div>
        </>
      )}
      
      <LoginModal showModal={showLoginModal} closeModal={handleLoginModalClose} onLoginSuccess={handleLoginSuccess} />
      <SignupModal showModal={showSignupModal} closeModal={handleSignupModalClose} />
    </div>
  );
};

export default Loginpage;
