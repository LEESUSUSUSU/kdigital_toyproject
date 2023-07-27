import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
//import KokoMap from './components/KokoMap';
import Main from './components/Main';
import Loginpage from './components/loginpage';
import cssApp from './App.css';


function App() {
  return (
    <main>
      <header>
        <div className="App">
          <AppBar position="static">
            <Toolbar style={{ backgroundColor: "#74A629" }}>
              <h2>노인을 위한 나라</h2>
            </Toolbar>
          </AppBar>
        </div>
      </header>
      <div>
      <Main/>
          <Loginpage/>
      </div>
      <div>
        <h2>복지관위치</h2>
        
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
