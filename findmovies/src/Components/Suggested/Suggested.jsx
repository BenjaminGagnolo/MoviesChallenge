import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from '@chakra-ui/react'
import {getAllSuggested, orderByPop} from '../../Redux/actions/index'
import Card1 from "../card/Card1";

const Suggested = () =>{
 
    
    let movies = useSelector(state => state.movies.results);
    const dispatch = useDispatch()
    
    useEffect(()=>{    
        dispatch(getAllSuggested())
        dispatch(orderByPop())
    }, [dispatch])

    let suggestedMovies = movies

   //console.log(suggestedMovies)
    return( 
            <>
            <p className="topTitle">Suggested</p>


            <Card >
           { suggestedMovies?.map((movie)=>{
               return(
                   <div className="card">

                   <Card1
                   key={movie.id}  
                   original_language={movie.original_language}  
                   title={movie.title}  
                   poster_path={movie.poster_path}  
                   />

                   </div>
                   )
                })}
            
            </Card>

            </>
    )
}

export default Suggested;