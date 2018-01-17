import React from 'react';

class Review extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const review = this.props.result;
    return (
      <div className={'review'}>
        <h4>{review.author}:</h4>
        <p>{review.content}</p>
      </div>
    );
  }
}

export default Review;
