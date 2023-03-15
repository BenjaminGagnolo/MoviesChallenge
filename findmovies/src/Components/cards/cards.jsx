import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "@chakra-ui/react";
//import logo from "../../Image/Cinema.png"
import { getAllMovies, getPopular } from "../../Redux/actions/index";
import Card1 from "../card/Card1";
//import './cards.scss'

const Cards = () => {
  let movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  let allMovies = useSelector((state) => state.allMovies);
  const [state, setState] = useState(false);
  const [name, setName] = useState("See all");

  useEffect(() => {
    dispatch(getAllMovies());
    dispatch(getPopular());
  }, [dispatch]);

  const moviesSort = movies.results?.sort((a, b) => {
    if (a.popularity < b.popularity) return 1;
    if (a.popularity > b.popularity) return -1;
    return 0;
  });

  let mostPopular = moviesSort?.slice(0, 1);
  let topPopular = moviesSort?.slice(1, 4);
  let allmoviesResults = allMovies?.results;

  console.log("ESTAS SON TODAS PIBE", allMovies?.results);

  const handleChange = (param) => {
    param.preventDefault();
    if (state) {
      setState(false);
      setName("See all");
    } else {
      setState(true);
      setName("See less");
    }
  };
  return (
    <>
      <Card>
        <p>Most popular</p>
        {mostPopular?.map((movie) => {
          return (
            <Card1
              key={movie.id}
              original_language={movie.original_language}
              title={movie.title}
              poster_path={movie.poster_path}
            />
          );
        })}
      </Card>
      <p className="topTitle">Top popular</p>

      <div className="TopPopular">
        <Card>
          {topPopular?.map((movie) => {
            return (
              <div className="card">
                <Card1
                  key={movie.id}
                  original_language={movie.original_language}
                  title={movie.title}
                  poster_path={movie.poster_path}
                />
              </div>
            );
          })}
        </Card>
      </div>
      <div>
        <button onClick={(e) => handleChange(e)}>{name}</button>
        {state === true ? (
          <Card>
            <p className="topTitle">All movies</p>
            {allmoviesResults?.map((movie) => {
              return (
                <div className="card">
                  <Card1
                    key={movie.id}
                    original_language={movie.original_language}
                    title={movie.title}
                    poster_path={movie.poster_path}
                  />
                </div>
              );
            })}
          </Card>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};

export default Cards;
