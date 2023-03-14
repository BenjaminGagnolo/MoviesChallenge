import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { Routes, Route} from 'react-router-dom';
import * as React from "react";
import LandingPage from './Components/landingpage/LandingPage';
import Home from './Components/Home/Home';
import Suggested from './Components/Suggested/Suggested';



function App() {

  return (
    <ChakraProvider>
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route exact path='/suggested' element={ <Suggested/> } />
        <Route exact path='/home' element={<Home />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
