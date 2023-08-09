import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import {RecoilRoot} from 'recoil';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import KakaoMap from './KakaoMap';
import Main from './Main';
import Loginpage from './loginpage';
import InfoModal from './InfoModal'
import WriteReview from './WriteReview';

import './MainFrameCss.css';




const MainFrame = () => {


    const [searchText, setSearchText] = useState('');

    const handleSearchChange = (e) => {
      setSearchText(e.target.value);
    };
  
    return (
    
      <RecoilRoot>
      
      <main className="mainBody">
        <header>
          <div className="App">
            <AppBar position="static">
              <Toolbar style={{ backgroundColor: "#74A629" }}>
                <h1 className="mainTitle">노인을 위한 나라 </h1>&nbsp;
                <Loginpage />
              </Toolbar>            
            </AppBar>
            
          </div>
        </header>
        <div>
          <Main />
        </div>
        <div className="App1">
          
  
          <KakaoMap/>
        </div>
        <footer>
          <div>
          ☘ made by Suyeon Lee, Soyun Yang ☘
          </div>
        </footer>
      </main>
      </RecoilRoot>
   
    );

}

export default MainFrame;