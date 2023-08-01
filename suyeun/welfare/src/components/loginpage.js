import React, { useState } from 'react';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';

const LoginForm = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginModalOpen = () => {
    setShowLoginModal(true);
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
          <button type="button" className="login-button" onClick={handleLoginModalOpen}>
            로그인
          </button>
          <button type="button" className="signup-button" onClick={handleSignupModalOpen}>
            회원가입
          </button>
        </>
      )}

      <LoginModal showModal={showLoginModal} closeModal={handleLoginModalClose} onLoginSuccess={handleLoginSuccess} />
      <SignupModal showModal={showSignupModal} closeModal={handleSignupModalClose} />
    </div>
  );
};

export default LoginForm;
