import React from 'react';

const RewardPledgeForm = (props) => {
  const rewardId = this.props.reward.id;

  if (this.props.formShow) {
    return (
      <form>
        <input
          type="number"
          value={this.props.amount}
          />
        <button onClick={this.props.handleRewardPledgeSubmit(rewardId)}>
          Pledge
        </button>
      </form>
    );
  } else {
    return <p></p>;
  }

};

export default RewardPledgeForm;
