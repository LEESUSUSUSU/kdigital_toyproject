import React, { useState } from 'react';

const SignupModal = ({ showModal, closeModal }) => {
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newTel, setNewTel] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSignupSubmit = async (e) => {
    e.preventDefault();

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
        closeModal();
      } else {
        setMessage('회원가입 실패. 서버 오류가 발생했습니다.');
      }
    } catch (error) {
      setMessage('회원가입 실패. 서버 오류가 발생했습니다.');
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
            <h3>회원가입</h3>
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
          </form>
          <p>{message}</p>
        </div>
      </div>
    )
  );
};

export default SignupModal;
