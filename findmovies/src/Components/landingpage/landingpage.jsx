import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  Box, Image, AbsoluteCenter, Link} from '@chakra-ui/react'
import logo from "../../Image/Cinema.png"


const LandingPage = () =>{
    return( 
       
        <Box position='relative' h='100px' >  
        <AbsoluteCenter>
            <Image
            className="Logo"
            boxSize='100px'
            objectFit='cover'
            alt='Dan Abramov'
            src={logo}/>  
        </AbsoluteCenter>                        
        </Box>
       
    )
}

export default LandingPage;