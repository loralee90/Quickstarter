import React from 'react';

class RewardsFormItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const rewardNum = this.props.rewardNum;

    return (
      <li className="rewards-form-item">
        <label className="reward-number">Reward #{this.props.rewardNum}</label>
        <form>
          <div className="project-rewards-field">
            <label className="reward-form-label">Title</label>
            <input
              type="text"
              value={this.props.state.rewards[rewardNum].title}
              onChange={this.props.updateReward(rewardNum, "title")}
              />
          </div>
          <div className="project-rewards-field">
            <label className="reward-form-label">Pledge amount</label>
            <input
              type="number"
              value={this.props.state.rewards[rewardNum].cost}
              onChange={this.props.updateReward(rewardNum, "cost")}
              placeholder="$ 0"
              />
          </div>
          <div className="project-rewards-field">
            <label className="reward-form-label">Description</label>
            <input
              type="textarea"
              value={this.props.state.rewards[rewardNum].description}
              onChange={this.props.updateReward(rewardNum, "description")}
              />
          </div>
          <div className="project-rewards-field">
            <label className="reward-form-label">Estimated delivery</label>
            <input
              type="date"
              value={this.props.state.rewards[rewardNum].delivery_date}
              onChange={this.props.updateReward(rewardNum, "delivery_date")}
              />
          </div>
        </form>
      </li>
    );
  }
}

export default RewardsFormItem;
