import React from 'react';
import Search from './Search';

class Banner extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <span>
      <img className={'logo'} src={'https://lattice.com/img/lattice-logo-color.svg'}/>
      <div className={'search'}>
      <Search searchCallBack={this.props.searchCallBack} />
      </div>
      </span>
    )
  }
}

export default Banner