import React, { useEffect, useState } from 'react'
import axios from './axios'
import requests from './request'
import './Banner.css'

function Banner() {

    const [movie,setMovie] = useState([])

    useEffect(()=>{
        async function getData()
        {
            const request=await axios.get(requests.fetchNetflixOriginals)
            console.log(request.data.results);
            const randomIndex=Math.floor(Math.random()*request.data.results.length-1);
            console.log(randomIndex);
            setMovie(request.data.results[randomIndex])
            return request
        }
        getData();
    },[])

    console.log(movie);

    return (
        <header className='banner'
            style=
            {
                {
                    backgroundSize:'cover',
                    backgroundImage:`url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`
                }
            }
        >
            <div className='banner-contents'>
                <h1 className='banner-title'>{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className='banner-buttons'>
                    <button className='banner-button'>Play</button>
                    <button className='banner-button'>My List</button>
                </div>
                <h1 className='banner-description'>{movie?.overview}</h1>
            </div>
            <div className='banner-fade'></div>
        </header>
    )
}

export default Banner
