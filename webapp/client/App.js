import React from 'react';
import PopularMovies from './PopularMovies';
import Movie from './Movie';
import Banner from './Banner';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popular: {},
      loaded: false,
      selected: false,
      movie: {},
    }
    this.searchData = this.searchData.bind(this);
    this.selectedMovie = this.selectedMovie.bind(this);
  }

  componentWillMount() {
    fetch('/popular')
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ popular: data, loaded: true });
      });
  }

  searchData(value) {
    var data = { data: value };
    fetch('/search', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ popular: data, loaded: true, selected: false });
      });
  }
  selectedMovie(value) {
    var datas = { data: value };
    fetch('/movie', {
      method: 'POST',
      body: JSON.stringify(datas),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ movie: data, loaded: true, selected: true });
      });
  }

  render() {
    const apiCallSuc = this.state.popular.results;
    return (
      <div className={"master"}>
        <Banner className={"banner"} searchCallBack={this.searchData}/>
        <div className={"panel"}>
        {this.state.loaded && !this.state.selected &&
          apiCallSuc.map((result, i) => {
            return (
              <PopularMovies  result={result} key={result.poster_path} id={i} select={this.selectedMovie} />
            );
          })}
        {this.state.loaded && this.state.selected && <Movie movie={this.state.movie} />}
        </div>
      </div>
    );
  }
}
export default App;
