import React, { useState } from 'react';
import './App.css';
import {originals,action,HorrorMovies,RomanceMovies} from './url';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';

function App() {
  const [state,setState] = useState([]);
  return (
   <div>
    <NavBar />
    <Banner /> 
    <RowPost url={originals} title="Netflix Originals" /> 
    <RowPost url={action} title="Actions" isSmall/> 
    <RowPost url={HorrorMovies} title="HorrorMovies" isSmall/> 
    <RowPost url={RomanceMovies} title="RomanceMovies" isSmall/> 
   </div>
  )
}

export default App;
