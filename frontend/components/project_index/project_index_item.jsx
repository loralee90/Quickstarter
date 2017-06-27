import React from 'react';
import { Link } from 'react-router-dom';
import { Line } from 'rc-progress';

class ProjectIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.project = this.props.project;
    this.percent = (this.project.total_pledge_amount / this.project.funding_goal) * 100;

    this.renderProgressLine = this.renderProgressLine.bind(this);
    this.renderDateRemaining = this.renderDateRemaining.bind(this);
  }

  renderProgressLine() {
    return (
      <Line
        className="progress-bar"
        percent={`${this.percent}`}
        strokeWidth="1"
        strokeColor="#2BDE73"
        trailColor="#E6E7E8"
        strokeLinecap="square"
      />
    );
  }

  numberWithCommas (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  renderDateRemaining(endDate) {
    const currentDate = new Date();
    return this.numberWithCommas(
      Math.ceil((new Date(endDate) - currentDate) / 86400000)
    );
  }

  render() {
    return (
      <li className="project">
        <div className="project-outline">
          <div className="project-image">
            <Link to={`/projects/${this.project.id}`}>
              <img src={this.project.image_url} alt={this.project.name} />
            </Link>
          </div>
          <div className="project-info">
            <div className="project-category">
              <Link to={`/categories/${this.project.category_id}`}>
                {this.project.category_name}
              </Link>
            </div>
            <p className="project-title-description">
              <Link to={`/projects/${this.project.id}`}>
                {this.project.title}:
              </Link>
              &nbsp;
              {this.project.description}
            </p>
            <div className="creator-info">
              <img src={this.project.creator_image_url} alt={this.project.creator_name} />
              &nbsp;&nbsp;
              <span className="by">by</span>&nbsp;<p>{this.project.creator_name}</p>
            </div>
            <div className="progress-line">
              {this.renderProgressLine()}
            </div>
            <div className="project-funding-stats">
              <div className="pledged-stat">
                <span>{this.project.total_pledge_amount}</span>&nbsp;
                <p>pledged</p>
              </div>
              <div className="funded-stat">
                <span>{this.percent}%</span>&nbsp;
                <p>funded</p>
              </div>
              <div className="days-left">
                <span>{this.renderDateRemaining(this.project.end_date)}</span>
                &nbsp;
                <p>days to go</p>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default ProjectIndexItem;
