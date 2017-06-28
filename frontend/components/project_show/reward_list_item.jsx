import React from 'react';
// import RewardPledgeForm from './reward_pledge_form';

class RewardListItem extends React.Component {
  constructor(props) {
    super(props);
    this.reward = this.props.reward;
  }

  render() {
    return (
      <li key={this.reward.id} className="reward-list-item">
        <h4>Pledge ${this.reward.cost} or more</h4>
        <h5>{this.reward.title}</h5>
        <p className="reward-description">{this.reward.description}</p>
        <span>estimated delivery</span>
        <p className="delivery-date">{this.reward.delivery_date}</p>
        <p className="reward-backers">{this.reward.total_backers} backers</p>
      </li>
    );
  }
}
// formShow={this.props.state.pledges[this.reward.id].formShow} />
// handleClick={this.props.handleClick}
// handleRewardPledgeSubmit={this.props.handleRewardPledgeSubmit}
// amount={this.props.state.pledges[this.reward.id].amount}

export default RewardListItem;

// <RewardPledgeForm
//   reward={this.reward} />
