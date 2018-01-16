import React from 'react';
import Review from './Review';

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review: '',
      loaded: false,
    }
  }
  componentWillMount() {
    var id = {id: this.props.movie.id};
    fetch('/movie/review', {
      method: 'POST',
      body: JSON.stringify(id),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ review: data, loaded: true});
        console.log(this.state.review,'yo yo yo');
      });
      
  }

  render() {
    const movie = this.props.movie;
    const url = 'https://image.tmdb.org/t/p/w300/' + movie.poster_path;

    return (
      <div className={"movie"}>
        <h1>{movie.title}</h1>
        <img src={url} />
        <h2>{movie.overview} </h2>
        <h3>REVIEWS</h3>
        {this.state.loaded &&
          this.state.review.results.map((result, i) => {
            return (
              <Review result={result} key={result.id} />
            );
          })}
      </div>
    );
  }
}

export default Movie;
