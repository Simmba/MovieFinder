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
      <Search searchCallBack={this.props.searchCallBack} />
      </div>
    )
  }
}

export default Banner