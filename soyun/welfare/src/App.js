import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from 'react';
import {RecoilRoot} from 'recoil';

import WriteReview from './components/WriteReview';
import MainFrame from './components/MainFrame';
import './App.css';


function App() {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <RecoilRoot>
    <BrowserRouter>
    <main className="container"> 
        <Routes>
          <Route path='/' element={<MainFrame />} />
          <Route path='/WriteReview/:name' element={<WriteReview />} />
        </Routes> 
    </main>
    </BrowserRouter>
    </RecoilRoot>
    
  );
}

export default App;
