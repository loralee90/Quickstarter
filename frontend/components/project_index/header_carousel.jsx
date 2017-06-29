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
      );
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
      <img src="http://abduzeedo.com/sites/default/files/styles/home_cover/public/originals/8fcaca8a-eab8-9b7a-510a-87b412469a88.jpg?itok=-w7GCqqx" />
      <img src="http://coresites-cdn.factorymedia.com/mpora_new/wp-content/uploads/2016/09/tny-14.jpg" />
      <img src="http://abduzeedo.com/sites/default/files/styles/home_cover/public/originals/64452337326517.573dd7751f133.jpg?itok=hOflj9zb" />
    </Carousel>
  );
  // <img src="assets/quickstarter_avatar" />
};

export default HeaderCarousel;
