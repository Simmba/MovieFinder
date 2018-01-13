import React from 'react';
import Search from './Search';

class Banner extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
      <img src={'https://lattice.com/img/lattice-logo-color.svg'}/>
      <img src={'http://www.mangangraphics.co.nz/themes/trade-dark/images/banner-pholder.jpg'}/>
      <Search searchCallBack={this.props.searchCallBack} />
      </div>
    )
  }
}

export default Banner