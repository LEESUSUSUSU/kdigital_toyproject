import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from 'react';
import {RecoilRoot} from 'recoil';

import WriteReview from './components/WriteReview';
import MainFrame from './components/MainFrame';
import ShowReview from './components/ShowReview';
import DeletePost from './components/DeletePost';
import UpdatePost from './components/UpdatePost';

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
          <Route path='/WriteReview/:name/:username' element={<WriteReview />} />
          <Route path='/ShowReview/:welfareName/:seq' element={<ShowReview />} />
          <Route path='/DeletePost/:seq' element={<DeletePost />} />
          <Route path='/UpdatePost/:seq/:welfareName/:username' element={<UpdatePost />} />
        </Routes> 
    </main>
    </BrowserRouter>
    </RecoilRoot>
    
  );
}

export default App;
