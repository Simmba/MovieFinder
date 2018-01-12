import React from 'react';
import PopularMovies from './PopularMovies';
import Search from './Search';
import { Carousel } from 'react-bootstrap';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popular: {},
      searchState: false
    };
  }

  componentWillMount() {
    fetch('/popular')
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ popular: data });
        //console.log(this.state.popular.results[0].title)
      });
  }

  render() {
    const apiCallSuc = this.state.popular.results;
    return (
      <div>
        <Search />
        <Carousel>
          {apiCallSuc
            ? this.state.popular.results.map(result => {
                return <PopularMovies result={result} key={result.poster_path} />;
              })
            : ''}
          </Carousel>
      </div>
    );
  }
}
export default App;
