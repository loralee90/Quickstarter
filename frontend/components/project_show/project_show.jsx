import React from 'react';
import { Line } from 'rc-progress';
import { Link } from 'react-router-dom';
import RewardListItem from './reward_list_item';
import merge from 'lodash/merge';

class ProjectShow extends React.Component {
  constructor(props) {
    super(props);

    this.projectId = this.props.match.params.id;

    this.state = {
      projectButtonShow: false,
      [this.projectId]: {
        amount: 0,
        pledgeable_type: "Project",
        pledgeable_id: this.projectId
      },
      message: ""
    };

    if (this.props.user) {
      this.state[this.projectId].backer_id = this.props.user.id;
    }

    this.renderProgressLine = this.renderProgressLine.bind(this);
    this.renderDateRemaining = this.renderDateRemaining.bind(this);
    this.handleProjectPledgeClick = this.handleProjectPledgeClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderProjectPLedgeItem = this.renderProjectPledgeItem.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.renderEditDeleteButtons = this.renderEditDeleteButtons.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    document.body.scrollTop = 0;
    this.props.fetchProject(this.projectId);
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.projectButtonShow && this.state.projectButtonShow) {
      this.input.focus();
    }
  }

  componentWillReceiveProps(newProps) {
    if (this.projectId !== newProps.match.params.id) {
      this.props.fetchProject(newProps.match.params.id);
    }
  }

  renderProgressLine() {
    let percent;
    if (this.props.project.total_pledge_amount >= this.props.project.funding_goal) {
      percent = 100;
    } else {
      percent = (this.props.project.total_pledge_amount / this.props.project.funding_goal) * 100;
    }
    return (
      <Line
        className="progress-bar"
        percent={percent}
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

  handleProjectPledgeClick(e) {
    e.preventDefault();
    if (this.props.user) {
      this.setState({projectButtonShow: true});
    } else {
      this.props.history.push('/login');
    }
  }

  handleButtonClick(e) {
    e.preventDefault();
    e.stopPropagation();
    if (this.props.user) {
      this.form.scrollIntoView();
      this.setState({projectButtonShow: true});
    } else {
      this.props.history.push('/login');
    }
  }

  handleSubmit(e) {
    e.stopPropagation();
    e.preventDefault();
    this.props.createPledge(this.state[this.projectId])
      .then(data => this.setState({message: "You have made a pledge!"}));
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteProject(this.projectId)
      .then(data => this.props.history.push('/'));
  }

  renderProjectPledgeItem() {
    let klass = "project-pledge-item";
    let button = null;
    let message = null;

    if (this.state.projectButtonShow) {
      klass = "project-pledge-item-active";
      button = <button onClick={this.handleSubmit}>Pledge</button>;
      message = <p>{this.state.message}</p>;
    }
    return (
      <li className={klass} onClick={this.handleProjectPledgeClick}>
        <h4>Make a pledge without a reward</h4>
        <form ref={el => this.form = el} onSubmit={this.handleSubmit}>
          <input ref={el => this.input = el}
            data-prefill-amount="10"
            type="number"
            value={this.state[this.projectId].amount}
            onChange={this.update()}
            placeholder="$0" />
          {button}
          {message}
        </form>
      </li>
    );
  }

  renderEditDeleteButtons() {
    if (this.props.user && this.props.project.creator_id === this.props.user.id) {
      return (
        <div>
          <button><Link to={`/projects/${this.projectId}/edit`}>Edit this project</Link></button>
          <button onClick={this.handleDelete}>Delete this project</button>
        </div>
      );
    }
  }

  update() {
    return e => {
      const newPledge = merge({}, this.state[this.projectId], { amount: e.currentTarget.value });
      this.setState({ [this.projectId]: newPledge});
    };
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
                  ${this.numberWithCommas(this.props.project.total_pledge_amount)}
                </span>
                <p>
                  pledged of ${this.numberWithCommas(this.props.project.funding_goal)} goal
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
                <button onClick={this.handleButtonClick}>Back this project</button>
                {this.renderEditDeleteButtons()}
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
              {this.renderProjectPledgeItem()}
              {this.props.rewards.map(reward =>
                <RewardListItem
                  key={reward.id}
                  reward={reward}
                  user={this.props.user}
                  createPledge={this.props.createPledge}
                  history={this.props.history} />
              )}
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
