import React from 'react';
import merge from 'lodash/merge';

class RewardPledgeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pledge: {
        amount: this.props.reward.cost,
        pledgeable_type: "Reward",
        pledgeable_id: this.props.reward.id
      },
      message: ""
    };

    if (this.props.user) {
      this.state.backer_id = this.props.user.id;
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update() {
    return e => this.setState({ pledge: { amount: e.currentTarget.value } });
  }

  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    let pledge = merge({}, this.state.pledge);
    this.props.createPledge(this.state.pledge)
      .then(data => this.setState({pledge: pledge, message: "You have backed this reward!"}));
  }

  render() {
    return (
      <form className="reward-pledge-form" onSubmit={this.handleSubmit}>
        <span>pledge amount</span>
        <input
          type="number"
          value={this.state.pledge.amount}
          onChange={this.update()}
          placeholder="$0"
          />
        <button onClick={this.handleSubmit}>Pledge</button>
        <p>{this.state.message}</p>
      </form>
    );
  }


}

export default RewardPledgeForm;
