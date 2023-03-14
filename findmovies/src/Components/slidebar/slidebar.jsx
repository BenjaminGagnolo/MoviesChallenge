import React, { useEffect } from "react";
//import "./SlideBar.scss";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";

import {
  //getAllMovies,
  getPopular,
  getAllSuggested,
  orderByPop,
} from "../../Redux/actions/index";

const SlideBar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //dispatch(getAllMovies());
    dispatch(getPopular());
    dispatch(getAllSuggested());
    dispatch(orderByPop());
  }, [dispatch]);


  const handleClick = (param) => {
    param.preventDefault();
    dispatch(getPopular());
  };


  return (
    <div className="SideContainer">
      <div>
        <br></br>
        <Link to='/suggested'>
        <button>
          Show Suggested:
        </button>
        </Link>
      </div>
    </div>
  );
};

export default SlideBar;
