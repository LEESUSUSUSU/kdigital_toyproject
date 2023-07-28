import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import KokoMap from './components/KokoMap';
import Main from './components/Main';
import Loginpage from './components/loginpage';
import './App.css';

function App() {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <main>
      <header>
        <div className="App">
          <AppBar position="static">
            <Toolbar style={{ backgroundColor: "#74A629" }}>
              <h1>노인을 위한 나라</h1>
            </Toolbar>
          </AppBar>
        </div>
      </header>
      <div>
        <Main />
        <Loginpage />
      </div>
      <div className="App1">
        <h1>old를 위한 지도</h1>
        <label htmlFor="searchInput">
        
        </label>
        <input
          type="text"
          id="searchInput"
          value={searchText}
          onChange={handleSearchChange}
          placeholder="검색어를 입력하세요..."
          style={{ width: '300px', height: '40px' }} // Set the width and height here
        />
        <KokoMap search={searchText} />
      </div>
      <footer>
        <div>
          <h2>바닥</h2>
        </div>
      </footer>
    </main>
  );
}

export default App;
