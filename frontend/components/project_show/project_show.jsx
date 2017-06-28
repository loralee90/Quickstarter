import React from 'react';
import { Line } from 'rc-progress';
import RewardListItem from './reward_list_item';
import ProjectPledgeButton from './project_pledge_button';

class ProjectShow extends React.Component {
  constructor(props) {
    super(props);

    this.projectId = this.props.match.params.id;

    this.state = {
      projectButtonShow: false,
      pledges: {}
    };

    this.state.pledges[this.projectId] = {
      amount: 0,
      pledgeable_type: "Project",
      pledgeable_id: this.projectId,
      backer_id: this.props.user.id
    };

    this.props.rewards.forEach(reward => {
      this.state.pledges[reward.id] = {
        amount: 0,
        pledgeable_type: "Reward",
        pledgeable_id: reward.id,
        backer_id: this.props.user.id,
        formShow: false
      };
    });

    debugger;

    this.renderProgressLine = this.renderProgressLine.bind(this);
    this.renderDateRemaining = this.renderDateRemaining.bind(this);
    this.handleProjectPledgeClick = this.handleProjectPledgeClick.bind(this);
    this.handleRewardPledgeClick = this.handleRewardPledgeClick.bind(this);
    this.handleProjectPledgeSubmit = this.handleProjectPledgeSubmit.bind(this);
    this.handleRewardPledgeSubmit = this.handleRewardPledgeSubmit.bind(this);
    this.renderProjectPledgeButton = this.renderProjectPledgeButton.bind(this);
    this.renderRewardListItems = this.renderRewardListItems.bind(this);
  }

  componentDidMount() {
    this.props.fetchProject(this.projectId);
  }

  componentWillReceiveProps(newProps) {
    if (this.projectId !== newProps.match.params.id) {
      this.props.fetchProject(newProps.match.params.id);
    }
  }

  handleProjectPledgeClick(e) {
    e.preventDefault();
    this.setState({projectButtonShow: !this.state.projectButtonShow});
  }

  handleRewardPledgeClick(rewardId) {
    return e => {
      this.setState({ pledges: { [rewardId]: { formShow: !this.pledges[rewardId].formShow } } });
    };
  }

  handleRewardPledgeSubmit(rewardId) {
    return e => {
      delete this.state.pledges[rewardId].formShow;
      this.props.createPledge(this.state.pledges[rewardId]);
    };
  }

  handleProjectPledgeSubmit(e) {
    e.preventDefault();
    this.props.createPledge(this.state.pledges[this.projectId]);
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

  renderProjectPledgeButton() {
    if (this.state.formShow) {
      return (
        <button onClick={this.handleProjectPledgeSubmit}>Continue</button>
      );
    } else {
      return null;
    }
  }

  renderRewardListItems() {
    if (this.props.rewards) {
      debugger;
      return (
        <div>
          {this.props.rewards.map(reward =>
            <RewardListItem
              handleRewardPledgeClick={this.handleRewardPledgeClick}
              handleRewardPledgeSubmit={this.handleRewardPledgeSubmit}
              state={this.state}
              reward={reward}
              formShow={this.state.pledges[reward.id].formShow} />
          )}
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    if (this.props.project) {
      debugger;
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
                <button>Back this project</button>
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
              <li onClick={this.handleProjectPledgeClick}>
                <h4>Make a pledge without a reward</h4>
                <input
                  type="number"
                  value={this.state.pledges[this.projectId].amount} />
                {this.renderProjectPledgeButton()}
              </li>
              {this.renderRewardListItems()}
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
