import React, { useState } from 'react';
import './ShowReviewCss.css';

const SignupModal = ({ showModal, closeModal }) => {
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newTel, setNewTel] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    // 회원가입을 하는 코드

    try {
      const response = await fetch('http://localhost:8080/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: newUsername,
          password: newPassword,
          tel: newTel,
          email: newEmail,
        }),
      });

      if (response.ok) {
        setMessage('회원가입 성공!');
        var option =  "width = 300, height = 100, top = 100, left = 200, location = no"
        window.open(`/CreateAccountSuccess/${newUsername}`, "이름", option)
        closeModal();
      } else {
        setMessage('회원가입 실패. 이미 존재하는 아이디입니다1.');
      }
    } catch (error) {
      setMessage('회원가입 실패. 이미 존재하는 아이디입니다2.');
    }
  };

  const handleUsernameChange = (e) => {
    setNewUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleTelChange = (e) => {
    setNewTel(e.target.value);
  };

  const handleEmailChange = (e) => {
    setNewEmail(e.target.value);
  };

  return (
    showModal && (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <form onSubmit={handleSignupSubmit}>
            <div>
            &nbsp;&nbsp;/&nbsp;회원가입: &nbsp;&nbsp;
            <label htmlFor="newUsername">아이디</label>
            <input
              type="text"
              id="newUsername"
              value={newUsername}
              onChange={handleUsernameChange}
              required
            />

            <label htmlFor="newPassword">비밀번호</label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={handlePasswordChange}
              required
            />

            <label htmlFor="newTel">전화번호</label>
            <input
              type="text"
              id="newTel"
              value={newTel}
              onChange={handleTelChange}
              required
            />

            <label htmlFor="newEmail">이메일</label>
            <input
              type="email"
              id="newEmail"
              value={newEmail}
              onChange={handleEmailChange}
              required
            />

            <button type="submit" className="signup-button">
              회원가입
            </button>
            </div>
          </form>
          
          <p>{message}</p>
        </div>
      </div>
    )
  );
};

export default SignupModal;
