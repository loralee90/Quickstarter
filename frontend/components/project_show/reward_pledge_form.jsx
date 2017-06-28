import React from 'react';

class RewardPledgeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: 0,
      pledgeable_type: "Reward",
      pledgeable_id: this.props.reward.id
    };

    if (this.props.user) {
      this.state.backer_id = this.props.user.id;
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update() {
    return e => this.setState({ amount: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPledge(this.state);
  }

  render() {
    return (
      <form className="reward-pledge-form" onSubmit={this.handleSubmit}>
        <span>pledge amount</span>
        <input
          type="number"
          value={this.state.amount}
          onChange={this.update()}
          placeholder="$0"
          />
        <button onClick={this.handleSubmit}>Pledge</button>
      </form>
    );
  }


}

export default RewardPledgeForm;
