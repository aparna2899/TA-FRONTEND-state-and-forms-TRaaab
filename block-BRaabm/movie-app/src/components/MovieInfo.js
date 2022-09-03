import React from 'react';

class MovieInfo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <p>Year: {this.props.Year}</p>
        <p>Rated: {this.props.Rated}</p>
        <p>Runtime: {this.props.Runtime}</p>
        <p>Genre: {this.props.Genre}</p>
        <p>Director: {this.props.Director}</p>
        <p>Writer: {this.props.Writer}</p>
        <p>Actors: {this.props.Actors}</p>
        <p>Plot: {this.props.Plot}</p>
        <p>Language: {this.props.Language}</p>
        <p>Country: {this.props.Country}</p>
        <p>Awards: {this.props.Awards}</p>
        <p>Metascore: {this.props.Metascore}</p>
        <p>imdb Rating: {this.props.imdbRating}</p>
        <p>imdb Votes: {this.props.imdbVotes}</p>
        <p>imdb ID: {this.props.imdbID}</p>
        <p>Type: {this.props.Type}</p>
        <p>Response: {this.props.Response}</p>
      </>
    );
  }
}

export default MovieInfo;
