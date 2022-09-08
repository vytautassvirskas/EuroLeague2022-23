import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React, {useState, useEffect} from 'react'
import axios from "axios";

import Header from "./components/Header"
import Results from './pages/Results';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

import './App.css';

function App() {
  const [team1Sum, setTeam1Sum] = useState("")
  const [team2Sum, setTeam2Sum] = useState("")
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='/results/:gameId' element={<Results></Results>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
        {/* <Route path='/results/:gameId' element={<Results team1Sum={team1Sum} team2Sum={team2Sum} setTeam1Sum={setTeam1Sum} setTeam2Sum= {setTeam2Sum }></Results>}></Route>
        <Route path="/" element={<Home team1Sum={team1Sum} team2Sum={team2Sum}></Home>}></Route> */}
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
