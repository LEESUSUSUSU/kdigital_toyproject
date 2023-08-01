import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showSignupModal, setShowSignupModal] = useState(false); // State to control the visibility of the signup modal

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('10.125.121.202:8000/idpw', {
        username,
        password,
      });

      if (response.status === 200) {
        setMessage('로그인 성공!');
        // Do something after successful login (e.g., redirect to a new page)
      } else {
        setMessage('로그인 실패. 올바른 정보를 입력하세요.');
      }
    } catch (error) {
      setMessage('로그인 실패. 서버 오류가 발생했습니다.');
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    const newCall = document.getElementById('newCall').value;
    const newEmail = document.getElementById('newEmail').value;

    try {
      const response = await axios.post('10.125.121.202/api/signup', {
        username: newUsername,
        password: newPassword,
        call: newCall,
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

  const handleSignupModalOpen = () => {
    setShowSignupModal(true); // Show the signup modal when "회원가입" button is clicked
  };

  const handleSignupModalClose = () => {
    setShowSignupModal(false); // Close the signup modal when the close button is clicked
  };

  return (
    <div className='loginpage'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username"><h3>사용자 이름</h3></label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password"><h3>비밀번호</h3></label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="login-button">로그인</button>
        <button type="button" className="signup-button" onClick={handleSignupModalOpen}>
          회원가입
        </button>
      </form>
      <p>{message}</p>

      {showSignupModal && ( // Conditionally render the signup modal
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleSignupModalClose}>
              &times;
            </span>
            <form onSubmit={handleSignupSubmit}>
              <h3>회원가입</h3>
              <label htmlFor="newUsername">아이디</label>
              <input
                type="text"
                id="newUsername"
                required
              />
              <label htmlFor="newPassword">새 비밀번호</label>
              <input
                type="password"
                id="newPassword"
                required
              />
               <label htmlFor="newCall">전화번호</label>
              <input
                type="newCall"
                id="newCall"
                required
              />
                <label htmlFor="newEmail">이메일</label>
              <input
                type="newEmail"
                id="newEmail"
                required
              />
              <button type="submit" className="signup-button">회원가입</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
