import React, { useState, useEffect } from 'react';
    import axios from './axios';
    import './Row.css'

    // Append in order to retrive images
    const base_url = 'https://image.tmdb.org/t/p/original/';


    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str;
    }

    function Row({ title, fetchUrl, isLargeRow }) {
        const [movies, setMovies] = useState([]);

        useEffect(() => {
            async function fetchData() {
                const request = await axios.get(fetchUrl);
                setMovies(request.data.results);
                return request;
            }
            fetchData();
        }, [fetchUrl]);

        console.log(movies);

        return (
            <div className='row'>
                <h1>{title}</h1>
                <div className='row__posters'>

                    {movies.map((movie) => 
                        (isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path && (
                        <img
                          key={movie.id}
                          className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                         src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                         alt={movie.name}

                   />
                    ))
                    )}
                </div>
            </div>

        );
    }

    export default Row;
