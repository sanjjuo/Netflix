import React, { useEffect, useState } from 'react';
import { API_KEY, imageURL } from '../../constants/constants';
import './banner.css';
import axios from '../axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faList } from '@fortawesome/free-solid-svg-icons';
import YouTube from 'react-youtube';

function Banner() {
  const [movie, setMovie] = useState();
  const [url, setUrl] = useState('');

   useEffect(() => {
    // Fetch a new random movie when the component mounts
    fetchRandomMovie();
  }, []);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    }
  };

  const handlePlay = (id) => {
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
      console.log(response.data);
      if (response.data.results.length !== 0) {
        setUrl(response.data.results[0].key);
      } else {
        console.log('Trailer not Available');
      }
    });
  };
  const fetchRandomMovie = () => {
    axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      const randomIndex = Math.floor(Math.random() * response.data.results.length);
      setMovie(response.data.results[randomIndex]);
    });
  };


  return (
    <div style={{ backgroundImage: `url(${movie ? imageURL + movie.backdrop_path : ''})` }} className='banner'>
      <div className='content'>
        <h1 className='title'>{movie ? movie.title : 'Netflix Movie'}</h1>
        <div className='banner_buttons'>
           {movie && (
               <button className='button' onClick={() => handlePlay(movie.id)}>
               <FontAwesomeIcon icon={faPlay} />Play
             </button>
          )}
          { url && <YouTube videoId={url} opts={opts}/>}
         
          <button className='button'>
            <FontAwesomeIcon icon={faList} />My List
          </button>
        </div>
        <h1 className='description'>{movie ? movie.overview : ''}</h1>
      </div>
      <div className='fade_bottom'></div>
    </div>
  );
}

export default Banner;
