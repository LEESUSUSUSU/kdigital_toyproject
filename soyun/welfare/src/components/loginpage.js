import React, { useState } from 'react';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import axios from 'axios';
import './LoginCss.css';

const LoginForm = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState('');

  const handleLoginModalOpen = () => {
    setShowLoginModal(true);
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    const newTel = document.getElementById('newTel').value;
    const newEmail = document.getElementById('newEmail').value;

    try {
      const response = await axios.post('/api/signup', {
        username: newUsername,
        password: newPassword,
        tel: newTel,
        email: newEmail,
      });

      if (response.status === 200) {
        setMessage('회원가입 성공!');
        setShowSignupModal(false); // Close the signup modal after successful signup
      } else {
        setMessage('회원가입 실패. 서버 오류가 발생했습니다.');
      }
    } catch (error) {
      setMessage('회원가입 실패. 서버 오류가 발생했습니다.');
    }
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
  };

  return (
    <div className='loginpage'>
      {isLoggedIn ? (
        <button type="button" className="logout-button" onClick={handleLogout}>
          로그아웃
        </button>
      ) : (
        <>
          <div>
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

export default LoginForm;
