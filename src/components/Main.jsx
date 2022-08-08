import axios from 'axios'
import React, {useEffect, useState} from 'react'
import requests from '../request'

const Main = () => {
    const [movies, setMovies] = useState([])

    // To randomly load movies
    const movie = movies[Math.floor(Math.random() * movies.length)]

    useEffect(()=>{  /* useEffect so that the component mount only when the page loads */
        axios.get(requests.requestPopular).then((response)=>{
            setMovies(response.data.results)
        })
    }, [])  /* Don't forget to add [] otherwise the page with keep making the API calls and will not stop. You'll be banned most probably :)*/
    
    const truncateString = (str, num) => {
        if(str?.length > num){
            var aTag = document.querySelector('#readMore')
            aTag.style.display = "initial"
            return str.slice(0, num) + '...'
        }
        else{
            return str
        }
    }

    const readmore = (str) => {
        var pTag = document.querySelector('#movieDesc')
        pTag.innerHTML = str
        
    }
    
    return (
        <div className="w-full h-[650px] text-white relative">
            <div className="w-full h-full">
                <div className='absolute w-full h-[650px] bg-gradient-to-r from-black'></div>
                <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
                <div className='absolute w-full top-[50%] translate-y-[-50%] p-4 md:p-8'>
                    <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
                    <div className='my-4'>
                        <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>Play</button>
                        <button className='border text-white border-gray-300 py-2 px-5 ml-4'>Watch Later</button>
                    </div>
                    <p className='text-gray-400 text-sm'>Released: {movie?.release_date}</p>
                    <p id='movieDesc' className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>
                        {truncateString(movie?.overview, 150)}
                        <a onClick={()=>{readmore(movie?.overview)}} id="readMore" className='hidden cursor-pointer'>Read More</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main