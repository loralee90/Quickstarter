import React from 'react';
import { Line } from 'rc-progress';
import RewardListItem from './reward_list_item';

class ProjectShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }

    this.renderProgressLine = this.renderProgressLine.bind(this);
    this.renderDateRemaining = this.renderDateRemaining.bind(this);
    this.handleProjectPledgeClick = this.handleProjectPledgeClick.bind(this);
    this.handleRewardPledgeClick = this.handleRewardPledgeClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchProject(this.props.match.params.id);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.props.fetchProject(newProps.match.params.id);
    }
  }

  handleProjectPledgeClick(e) {
    e.preventDefault();

  }

  handleRewardPledgeClick(e) {
    e.preventDefault();
  }

  renderProgressLine() {
    const percent = (this.props.project.total_pledge_amount / this.props.project.funding_goal) * 100;
    return (
      <Line
        className="progress-bar"
        percent={90}
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
    if (this.props.project) {
      return (
        <section className="project-show-container">
          <div className="project-show-header">
            <div className="show-title-author">
              <div className="show-creator-info">
                <img src={this.props.project.creator_image_url} />
                <div>
                  <p>By</p>&nbsp;
                  <span>{this.props.project.creator_name}</span>
                </div>
              </div>
              <div className="show-title-description">
                <h2 className="show-title">
                  {this.props.project.title}
                </h2>
                <p className="show-description">
                  {this.props.project.description}
                </p>
              </div>
            </div>
            <div className="show-image-stats">
              <img src={this.props.project.image_url} />
              <div className="show-stats">
                {this.renderProgressLine()}
                <span className="show-pledge-amount">
                  ${this.props.project.total_pledge_amount}
                </span>
                <p>
                  pledged of ${this.props.project.funding_goal} goal
                </p>
                <span className="show-backers">
                  {this.props.project.total_backers}
                </span>
                <p>
                  backers
                </p>
                <span className="show-days">
                  {this.renderDateRemaining(this.props.project.end_date)}
                </span>
                <p>days to go</p>
                <button onClick={this.handleClick}>Back this project</button>
              </div>
            </div>
          </div>
          <div className="project-show-content">
            <div className="show-detail">
              <h3>About this project</h3>
              <p>{this.props.project.details}</p>
            </div>
            <ul className="project-reward-list">
              <h3>Support this project</h3>
              <li>
                <h4>Make a pledge without a reward</h4>
                <input type="number" />
              </li>
              {this.props.rewards.map(reward => <RewardListItem reward={reward} />)}
            </ul>
          </div>
        </section>
      );
    } else {
      return null;
    }
  }
}

export default ProjectShow;
