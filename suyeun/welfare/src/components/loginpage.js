import React, { useState } from 'react';
//import style from './loginpage.module.css'

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // 간단한 로그인 체크 (예시이므로 실제 서버 인증은 필요하지 않음)
    if (username === 'user' && password === 'password') {
      setMessage('로그인 성공!');
    } else {
      setMessage('로그인 실패. 올바른 정보를 입력하세요.');
    }
  };

  return (
    <div className='loginpage'>
     
      <form onSubmit={handleSubmit}>
        <label htmlFor="username"><h4>사용자 이름</h4></label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password"><h4>비밀번호</h4></label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit"><h5>로그인</h5></button>
        <button type="submit"><h5>회원가입</h5></button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default LoginForm;
