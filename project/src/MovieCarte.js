import React from 'react'
import "./moviecart.css"
import StarRatingComponent from 'react-star-rating-component';
import { Link } from 'react-router-dom';

const MovieCarte = ({movie}) => {
  return (
    <div>
<div className="movie_card" id="bright">
  <div className="info_section">
    <div className="movie_header">
      <img className="locandina" src={movie.main_img}/>
      <h1>{movie.title}</h1>
      <h4>2017, David Ayer</h4>
      <span className="minutes">117 min</span>
      <p className="type">Action, Crime, Fantasy</p>
    </div>
    <div className="movie_desc">
      <p className="text">{movie.description}</p>
      <Link to={`/movie/${movie.id}`} > Trailer </Link>
    </div>

  </div>
 
  <div className="blur_back bright_back"></div>
</div>
    </div>
  )
}

export default MovieCarte
