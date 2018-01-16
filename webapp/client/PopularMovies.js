import React from 'react';
import { Popover, OverlayTrigger} from 'react-bootstrap';

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
    const popoverHoverFocus = (
      <Popover id="popover-trigger-hover-focus" title={movie.title}>
        {this.props.result.overview}
      </Popover>
    );
    
    return (
      
      <div className={"gridblocks"}>
        <OverlayTrigger
        trigger={['hover', 'focus']}
        placement="bottom"
        overlay={popoverHoverFocus}
      >
      <img className={'images'} href="#" onClick={() => this.selectMovie(movie.id)} src={url} onMouseEnter={this.mouseHover} onMouseLeave={this.mouseHover} />
      </OverlayTrigger>
        
      </div>
    )
  }
}

export default PopularMovies;