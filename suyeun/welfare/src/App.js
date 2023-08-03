import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
<<<<<<< HEAD
import KakaMap from './components/KakaMap';
=======
import KakaoMap from './components/KakaoMap';
>>>>>>> 958e4e8abb76f2cca420f218fa24bc064ce0c580
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
<<<<<<< HEAD


        <KakaMap/>
=======
        

        <KakaoMap/>
>>>>>>> 958e4e8abb76f2cca420f218fa24bc064ce0c580
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
