import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { Routes, Route} from 'react-router-dom';
import * as React from "react";
import LandingPage from './Components/landingpage/LandingPage';
import Home from './Components/Home/Home';


function App() {

  return (
    <ChakraProvider>
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route exact path='/home' component={<Home />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
