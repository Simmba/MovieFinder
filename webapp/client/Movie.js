import React from 'react';

class Movie extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const movie = this.props.movie;
    const url = 'https://image.tmdb.org/t/p/w300/' + movie.poster_path;

    return (
      <div>
        <h3>{movie.title}</h3>
        <img src={url} />
        <p>{movie.overview} </p>
      </div>
    );
  }
}

export default Movie;
