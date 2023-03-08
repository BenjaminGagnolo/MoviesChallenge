import React from "react";
//import { useEffect } from "react";
//import {redirect } from "react-router-dom"
//import { Link as ReachLink } from "@reach/router"
//import { useDispatch, useSelector } from "react-redux";
import {  Box, Image, AbsoluteCenter, /* Link */ } from '@chakra-ui/react'
import logo from "../../Image/cinema2.png"
//import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";


const LandingPage = () =>{
    return( 
        <Box position='relative' h='300px' >  
        <AbsoluteCenter>
        <Link to='/home' >
            <Image
            className="Logo"
            boxSize='150px'
            objectFit='cover'
            alt='Dan Abramov'
            src={logo}/>  
        </Link>
        </AbsoluteCenter>                        
        </Box>
    )
}

export default LandingPage;