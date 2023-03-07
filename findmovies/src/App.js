import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { Routes, Route} from 'react-router-dom';
import * as React from "react";
import LandingPage from './Components/landingpage/LandingPage';
import Home from './Components/Home/Home';

function App() {
  return (
    <ChakraProvider>
      <LandingPage />
      <Routes>
        <Route exact path="/Home" component={Home}/>
      </Routes>

     {/*  <Route exact path="/" component={LandingPage} />
      <Route exact path="/Home" component={Home} /> */}
      
    </ChakraProvider>
  );
}

export default App;
