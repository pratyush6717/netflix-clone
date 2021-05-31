import React, {useState,useEffect} from 'react';
import axios from './axios'; //here we can call axios whatever we want it's like alias because in axios there is export default
import './Row.css';
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";  

const base_url = "https://images.tmdb.org/t/p/original/";

function Row({ title,fetchUrl, isLargeRow }) {
    const [movies,setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() =>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();

},[fetchUrl]);

const opts={
    height:"390",
    width:"100%",
    playerVars:{
        autoplay:1,
    },
};

const handleClick = (movie) => {
if(trailerUrl){
    setTrailerUrl(' ');
}else{
    movieTrailer(movie?.name || "")
    .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
       setTrailerUrl(urlParams.get("v"));
    })
    .catch((error) => console.log(error));
}
};
console.log(movies);

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {
                    movies.map(movie =>(
                     <img 
                     key={movie.id}
                     oneClick={() => handleClick (movie)}
                       className={`row__poster ${isLargeRow && "row__posterLarge"}`}    
                     src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                      alt={movie.name}
                      />
                     ))}
                     
            </div>
            <div>
                      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
                     </div>
        </div>
    )
}

export default Row;
