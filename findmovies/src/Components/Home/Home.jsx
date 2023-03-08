import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card} from '@chakra-ui/react'
//import logo from "../../Image/Cinema.png"
import {getPopular} from '../../Redux/actions/index'
import Card1 from "../card/Card1";


const Home = () =>{

    
    let movies = useSelector(state => state.movies);
    const dispatch = useDispatch()
    
    useEffect(()=>{    
        dispatch(getPopular())
    }, [dispatch])
   
    movies.results?.map((m)=>{
        console.log(m.poster_path);
    })

    return( 
            <Card>

           { movies.results?.map((movie)=>{
                return(

                    <Card1 
                    key={movie.id}  
                    original_language={movie.original_language}  
                    title={movie.title}  
                    poster_path={movie.poster_path}  
                    />
                    )
            })}
            
            </Card>
    )
}

export default Home;