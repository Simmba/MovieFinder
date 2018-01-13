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
      
      <div className={"gridblocks"}>
      <img className={'images'} href="#" onClick={() => this.selectMovie(movie.id)} src={url} onMouseEnter={this.mouseHover} onMouseLeave={this.mouseHover} />
      <div className={'caption'}>
        {this.state.hover &&
        <span> 
        <h5 href="#" onClick={() => this.selectMovie(movie.id)} >{movie.title}</h5>
        <p>{movie.overview} </p>
        </span>}
      </div>
      </div>
    )
  }
}

export default PopularMovies;