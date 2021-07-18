import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import axios from './axios'
import './Row.css'

const baseImgUrl = 'https://image.tmdb.org/t/p/original'

function Row(props) {
    const [movies, setMovies] = useState([])
    const [trailerUrl,setTrailer] = useState("")

    useEffect(() => {
        async function getData() {
            const request = await axios.get(props.fetchUrl)
            // console.log(request.data.results);
            setMovies(request.data.results)
            return request
        }
        getData()
    }, [props.fetchUrl])

    const handleClick= async (movie)=>{
        if(trailerUrl)
        {
            setTrailer("")
        }
        else
        {
            let url=await axios.get(`/movie/${movie.id}/videos?api_key=fb34530271b349314af0de263d16ab5a`)
            setTrailer(url.data.results[0]?.key)
        }
    }

    const options={
        height:'400px',
        width:'100%',
        playerVars:{
            autoplay:1
        }
    }

    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='row-posters'>
                {
                    movies.map((movie) => {
                        return <img key={movie.id} className={`row-poster ${props.isLargeRow && 'row-posterlarge'}`} src={props.isLargeRow ? baseImgUrl + movie?.poster_path : baseImgUrl + movie?.backdrop_path} alt={movie?.name} 
                            onClick={()=>{handleClick(movie)}}    
                        />
                    })
                }
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={options}/>}
        </div>
    )
}

export default Row
