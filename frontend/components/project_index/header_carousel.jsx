import React from 'react';
import Carousel from 'nuka-carousel';
import Decorators from './decorators';
import { Link } from 'react-router-dom';

const HeaderCarousel = () => {
  return (
    <Carousel wrapAround={true} autoplay={true} autoplayInterval={10000} decorators={Decorators}>

      <div className="header-carousel-slide">
        <img src="http://abduzeedo.com/sites/default/files/styles/home_cover/public/originals/8fcaca8a-eab8-9b7a-510a-87b412469a88.jpg?itok=-w7GCqqx" />
      </div>

      <div className="header-carousel-slide">
        <img src="http://coresites-cdn.factorymedia.com/mpora_new/wp-content/uploads/2016/09/tny-14.jpg" />
      </div>

      <div className="header-carousel-slide">
        <img src="http://s3.amazonaws.com/quickstarter-dev/projects/images/000/000/102/original/tiny_telephone.jpg?1498803014" />
      </div>


      <div className="header-carousel-slide">
        <img src="http://s3.amazonaws.com/quickstarter-dev/projects/images/000/000/094/original/wood_keyboard.jpg?1498803011" />
      </div>

    </Carousel>
  );
};
// <div className="header-carousel-slide">
//   <img src="http://s3.amazonaws.com/quickstarter-dev/projects/images/000/000/099/original/drone.jpg?1498803013" />
// </div>

export default HeaderCarousel;

// <div className="header-carousel-slide">
//   <h1>Creators thrive here.</h1>
//   <h2>Quickstarter creators pursue bold ideas on their own terms. Start a project today.</h2>
//   <Link to="/projects/new"><button>Start project</button></Link>
//   <img src="http://abduzeedo.com/sites/default/files/styles/home_cover/public/originals/8fcaca8a-eab8-9b7a-510a-87b412469a88.jpg?itok=-w7GCqqx" />
// </div>
//
// <div className="header-carousel-slide">
//   <h1>Unbounded</h1>
//   <h2>A documentary following an adventure into Patagonia for exploration and conservation.</h2>
//   <Link to={`/projects/${66}`}><button>View project</button></Link>
//   <img src="http://coresites-cdn.factorymedia.com/mpora_new/wp-content/uploads/2016/09/tny-14.jpg" />
// </div>
//
// <div className="header-carousel-slide">
//   <h1>Tiny Telephone Oakland</h1>
//   <h2>Help one of the busiest recording studios in California</h2>
//   <Link to={`/projects/${66}`}><button>View project</button></Link>
//   <img src="http://s3.amazonaws.com/quickstarter-dev/projects/images/000/000/102/original/tiny_telephone.jpg?1498803014" />
// </div>
//
// <div className="header-carousel-slide">
//   <h1>Rise Grand Rapids</h1>
//   <h2>A documentary following an adventure into Patagonia for exploration and conservation.</h2>
//   <Link to={`/projects/${66}`}><button>View project</button></Link>
//   <img src="http://s3.amazonaws.com/quickstarter-dev/projects/images/000/000/103/original/grand_rapids.png?1498803014" />
// </div>
//
// <div className="header-carousel-slide">
//   <h1>Oakly</h1>
//   <h2>The Portable Wireless Keyboard</h2>
//   <Link to={`/projects/${66}`}><button>View project</button></Link>
//   <img src="http://s3.amazonaws.com/quickstarter-dev/projects/images/000/000/094/original/wood_keyboard.jpg?1498803011" />
// </div>
