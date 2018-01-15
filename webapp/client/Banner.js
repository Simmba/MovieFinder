import React from 'react';
import Search from './Search';

class Banner extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
      <img className={'logo'} src={'https://lattice.com/img/lattice-logo-color.svg'}/>
      <div className={'search'}>
      <Search searchCallBack={this.props.searchCallBack} />
      </div>
      </div>
    )
  }
}

export default Banner