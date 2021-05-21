
import axios from './axios';
import React , {useState, useEffect} from 'react';
import "./Banner.css";
import requests from "./Requests";
function Banner() {
   const [movie,setMovie]=useState([]);
   useEffect(()=>{
       async function fetchData(){
           const request = await axios.get("https://api.themoviedb.org/3/trending/all/week?api_key=03cf7673f21ae8c63d4097e2a8bf28df&language=en-US")
           setMovie(
               request.data.results[
                   Math.floor(Math.random() * request.data.results.length -1)
               ]
           );
           return request
       }
       fetchData();},
   []);
   console.log(movie)
    function truncate(string,n){
    return string?.length>n? string.substring(0,n-1) +'...':string
    }
    return (
        <header className="banner" style={{backgroundImage:`url("http://image.tmdb.org/t/p/w1280/${movie?.backdrop_path}")`,backgroundSize:"cover",backgroundPosition:"center center",}} >
          <div className="banner__contents">
          <h1 className="banner__title">
           {movie?.title || movie?.name || movie?.orignal_name}
          </h1>
          <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
          </div>
          <h1 className="banner__description"> {truncate(movie?.overview,150)} </h1>
          </div>
          <div className="banner__fadebutton"/>
        </header>
    )
}

export default Banner
