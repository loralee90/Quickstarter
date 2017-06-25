import React from 'react';
import BasicsForm from './basics_form';
import RewardsForm from './rewards_form';
import { Route, Link } from 'react-router-dom';
import { merge } from 'lodash';

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formType: "basics",
      title: "",
      description: "",
      end_date: "",
      funding_goal: 0,
      details: "",
      category_id: 0,
      rewardsNums: [1],
      rewards: {
        1: {title: "", description: "", cost: 0, delivery_date: ""}
      }
    };
    this.updateFormType = this.updateFormType.bind(this);
    this.updateBasics = this.updateBasics.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateReward = this.updateReward.bind(this);
  }

  componentDidMount() {
    this.props.fetchCategories();
  }

  updateFormType(type) {
    return () => {
      this.setState({ formType: type });
    };
  }

  updateBasics(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  updateReward(rewardNum, field) {
    if (this.state.rewardsNums.includes(rewardNum)) {
      return e => {
        this.setState({rewards: merge({}, this.state.rewards, {[rewardNum]: {[field]: e.currentTarget.value}})});
      };
    } else {
      let rewardsNums = this.state.rewardsNums.slice();
      rewardsNums.push(rewardNum);
      const newRewards = merge({}, this.state.rewards, {[rewardNum]: {title: "", description: "", cost: 0, delivery_date: ""}});
      this.setState({rewardsNums, rewards: newRewards});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const rewards_attributes = this.state.rewardsNums.map(num => this.state.rewards[num]);
    const project = merge({}, this.state);
    delete project.rewards;
    delete project.formType;
    delete project.rewardsNums;
    project.rewards_attributes = rewards_attributes;

    this.props.createProject(project)
      .then(data => this.props.history.push(`/projects/${data.id}`));
  }

  render() {
    return (
      <section className="project-form">
        <div className="project-form-nav">
          <button onClick={this.updateFormType("basics")}>Basics</button>
          <button onClick={this.updateFormType("rewards")}>Rewards</button>
        </div>
        <BasicsForm categories={this.props.categories} handleSubmit={this.handleSubmit} formType={this.state.formType} updateBasics={this.updateBasics} state={this.state} />
        <RewardsForm formType={this.state.formType} handleSubmit={this.handleSubmit} updateReward={this.updateReward} state={this.state} />
      </section>
    );
  }
}

export default ProjectForm;
