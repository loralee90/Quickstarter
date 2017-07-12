import React from 'react';
import RewardPledgeForm from './reward_pledge_form';

class RewardListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { formShow: false };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.props.user) {
      this.setState({formShow: true});
    } else {
      this.props.history.push('/login');
    }
  }

  render() {
    let klass = "reward-pledge-item";

    if (this.state.formShow) klass = "reward-pledge-item-active";

    return (
      <li onClick={this.handleClick} className={klass}>
        <h4>Pledge ${this.props.reward.cost} or more</h4>
        <h5>{this.props.reward.title}</h5>
        <p className="reward-description">{this.props.reward.description}</p>
        <span>estimated delivery</span>
        <p className="delivery-date">{this.props.reward.delivery_date}</p>
        <p className="reward-backers">{this.props.reward.total_backers} backers</p>
        <RewardPledgeForm
          createPledge={this.props.createPledge}
          formShow={this.state.formShow}
          reward={this.props.reward}
          user={this.props.user} />
      </li>
    );
  }
}

export default RewardListItem;
