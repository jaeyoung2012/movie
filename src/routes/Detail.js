import React from 'react';
import './Detail.css';
import { useLocation,Navigate } from 'react-router-dom';


function Detail() {
  const location = useLocation();
  
  console.log(location)
  if(location.state === null) {
    return <Navigate to="/"></Navigate>;
  } else {
    return (
      <section className='container'>
        <div className='movies'>
          <div className="movie">
            <img src={location.state.poster} alt={location.state.title} title={location.state.title} />
            <div className="movie__data">
              <h3 className="movie__title">{location.state.title}</h3>
              <h5 className="movie__year">{location.state.year}</h5>
              <h5 className='movie__rating'>☆{location.state.rating}</h5>
              <ul className="movie__genres">
                {location.state.genres.map((genre, index) => {
                  return (
                    <li key={index} className="movie__genre">
                      {genre}
                    </li>
                  );
                })}
              </ul>
              <p className="movie__summary">{location.state.summary}</p>
            </div>
        </div>
        </div>
      </section>
    )
  }
}


export default Detail;
