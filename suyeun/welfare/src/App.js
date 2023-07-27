import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
//import LockIcon from './components/LockIcon';
//import KokoMap from './components/KokoMap';
import Main from './components/LockIcon';

function App() {
  return (
    <main>


      <header>
        <div className="App">
          <AppBar position="static">
            <Toolbar style={{ backgroundColor: "#8C661F" }}>
              <h2>노인을 위한 나라</h2>
            </Toolbar>
          
          </AppBar>
          <Main/>

        </div>
      </header>
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
