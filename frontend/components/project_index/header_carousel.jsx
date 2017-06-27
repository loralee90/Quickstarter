import React from 'react';
import Carousel from 'nuka-carousel';

const Decorators = [{
  component: React.createClass({
    render() {
      return (
        <button
          onClick={this.props.previousSlide}>
          Previous Slide
        </button>
      )
    }
  }),
  position: 'CenterLeft',
  style: {
    padding: 20
  }
}];

const HeaderCarousel = () => {
  return (
    <Carousel wrapAround={true} autoplay={true} autoplayInterval={10000}>
      <img src="http://s3.amazonaws.com/quickstarter-dev/projects/images/000/000/010/original/500_days.jpg?1498574377" />
      <img src="assets/quickstarter_avatar" />
      <img src="http://s3.amazonaws.com/quickstarter-dev/projects/images/000/000/010/original/500_days.jpg?1498574377" />
      <img src="assets/quickstarter_avatar" />
    </Carousel>
  );
};

export default HeaderCarousel;
