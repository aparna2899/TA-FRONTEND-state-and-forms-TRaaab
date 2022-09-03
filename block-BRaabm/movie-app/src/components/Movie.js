import React from 'react';
import data from '../data.json';
import MovieInfo from './MovieInfo';

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null,
    };
  }
  handleClick = (index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    return (
      <ul className="movie-list flex flex-wrap justify-space-between">
        {data.map((movie, index) => (
          <li
            className={
              index === this.state.activeIndex ? 'card' : 'card flex flex-47'
            }
            key={movie.Title}
          >
            <div className="img-box flex-50">
              <img src={movie.Images[0]} />
            </div>
            <div className="flex-50 movie-info">
              <h2>{movie.Title}</h2>
              <p>{movie.Released}</p>
              <p className="more" onClick={() => this.handleClick(index)}>
                {index === this.state.activeIndex ? '' : 'More Info'}
              </p>
            </div>
            <div
              className={index === this.state.activeIndex ? 'movie-info' : ''}
            >
              {index === this.state.activeIndex ? <MovieInfo {...movie} /> : ''}
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default Movie;
