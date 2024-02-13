import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchSubreddits } from '../store/thunks';
import { NavLink } from "react-router-dom";
import '../styles/CSS/main.css';
import Loading from "../components/Loading";

const Home = () => {

  return (
    <div>
      <h1>ERAS HOME</h1>

    </div>
  );
};


export default Home;
