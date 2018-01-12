import React from 'react';
import { Carousel } from 'react-bootstrap';

class PopularMovies extends React.Component{
  constructor(props){
    super(props);
    this.mouseHover = this.mouseHover.bind(this);
    this.state = {
      hover: false,
    };
  }
  mouseHover() {
    this.setState(this.changeHover);
  }

  changeHover(state) {
    console.log(this.state.hover)
    return {
      hover: !state.hover,
    };
  }
  
  render() {
    const movie = this.props.result;
    const url = "https://image.tmdb.org/t/p/w300/"+movie.poster_path
    return (
      <Carousel.Item>
      <img src={url} width={900} height={500} alt="900x500" onMouseEnter={this.mouseHover} onMouseLeave={this.mouseHover} />
      {this.state.hover && 
      <Carousel.Caption>
        <h3>{movie.title}</h3>
        <p>{movie.overview} </p>
        </Carousel.Caption>}
      </Carousel.Item>
    )
  }
}

export default PopularMovies;