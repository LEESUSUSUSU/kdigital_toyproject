import React, { useState } from 'react';

const LoginModal = ({ showModal, closeModal }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (response.ok) {
        setMessage(`Hello, ${username} 어서오세요!`);
        closeModal();
        // Do something after successful login (e.g., redirect to a new page)
      } else {
        setMessage('로그인 실패. 올바른 정보를 입력하세요.');
      }
    } catch (error) {
      setMessage('로그인 실패. 서버 오류가 발생했습니다.');
    }
  };

  return (
    showModal && (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <form onSubmit={handleLogin}>
            <h3>로그인</h3>
            <label htmlFor="username">사용자 이름</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="login-button">로그인</button>
          </form>
          <p>{message}</p>
        </div>
      </div>
    )
  );
};

export default LoginModal;
