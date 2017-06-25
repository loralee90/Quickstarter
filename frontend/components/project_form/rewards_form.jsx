import React from 'react';
import RewardsFormItem from './rewards_form_item';
import merge from 'lodash/merge';

class RewardsForm extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   rewardsNums: [1],
    //   rewards: {
    //     1: {title: "", description: "", cost: 0, delivery_date: ""}
    //   }
    // };

    // this.updateReward = this.updateReward.bind(this);
    // this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    let rewardNum = this.state.rewardsNums.length + 1;
    // let rewardsNums = this.state.rewardsNums.slice();
    this.props.updateReward(rewardNum);
    // rewardsNums.push(newNum);
    // return e => this.setState({rewardsNums: rewardsNums, rewards: { [newNum]: {title: "", description: "", cost: 0, delivery_date: ""}}});
  }

  // updateReward(rewardNum, field) {
  //   return e => {
  //     this.setState({ rewards: { [rewardNum]: { [field]: e.currentTarget.value } } });
  //     this.props.updateReward(rewardNum, field);
  //   };
  // }

  render() {
    if (this.props.formType === "rewards") {
      return (
        <section className="reward-form-container">
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
        </ul>
        <button onClick={this.handleAdd} className="add-reward-button">+ Add a new reward</button>
        <button onClick={this.props.handleSubmit} className="save-project-button">Save project</button>
      </section>
    );
    } else {
    return <p></p>;
    }
  }
}

export default RewardsForm;
