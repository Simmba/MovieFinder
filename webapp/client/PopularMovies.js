import React from 'react';

class PopularMovies extends React.Component{
  constructor(props){
    super(props);
    this.mouseHover = this.mouseHover.bind(this);
    this.state = {
      hover: false
    };
  }
  mouseHover() {
    this.setState(this.changeHover);
  }

  changeHover(state) {
    return {
      hover: !state.hover,
    };
  }

  selectMovie(value){

    this.props.select(value);
  }

 
  render() {
    const movie = this.props.result;
    const url = "https://image.tmdb.org/t/p/w300/"+movie.poster_path
    
    return (
      <div>
      <h3 href="#" onClick={() => this.selectMovie(movie.id)} >{movie.title}</h3>
      <img href="#" onClick={() => this.selectMovie(movie.id)} src={url} onMouseEnter={this.mouseHover} onMouseLeave={this.mouseHover} />
      {this.state.hover && 
        <p>{movie.overview} </p>}
      </div>
    )
  }
}

export default PopularMovies;