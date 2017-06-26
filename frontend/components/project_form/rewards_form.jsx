import React from 'react';
import RewardsFormItem from './rewards_form_item';
import merge from 'lodash/merge';

class RewardsForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(e) {
    e.preventDefault();
    let rewardNum = this.props.state.rewardsNums.length + 1;
    this.props.updateReward(rewardNum);
  }

  render() {
    if (this.props.formType === "rewards") {
      return (
        <section className="rewards-form-container">
          <div className="rewards-form-copy">
            <h1>Add rewards!</h1>
            <p>Invite backers to be a part of the creative experience by offering
              rewards like a copy of what you’re making, a special experience,
              or a behind-the-scenes look into your process.</p>
          </div>
          <ul className="rewards-forms">
            {this.props.state.rewardsNums.map(
              num => <RewardsFormItem key={num} rewardNum={num} updateReward={this.props.updateReward} state={this.props.state} />
            )}
            <button onClick={this.handleAdd} className="add-reward-button">
              <i className="fa fa-plus"></i>&nbsp;&nbsp;
              Add a new reward
            </button>
            <button onClick={this.props.handleSubmit} className="save-project-button">Save project</button>
          </ul>
        </section>
      );
    } else {
      return <p></p>;
    }
  }
}

export default RewardsForm;
