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
    if (this.props.formShow) {
      return (
        <form onSubmit={this.handleSubmit}>
          <input
            type="number"
            value={this.state.amount}
            onChange={this.update()}
            />
          <button>Pledge</button>
        </form>
      );
    } else {
      return <p></p>;
    }
  }


}

export default RewardPledgeForm;