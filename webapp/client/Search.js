import React from 'react';

class Search extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleChange(event) {
  this.setState({value: event.target.value})
}

handleSubmit(event) {
    this.props.searchCallBack(this.state.value);
    this.setState({value: ''});
}
  render() {
    return (
      <div>
      <input type="text" placeholder="What would you like to see?" value={this.state.value} onChange={this.handleChange} />
      <input type="submit" value="Submit" onClick={this.handleSubmit}/>
      </div>
    )
  }
}

export default Search;