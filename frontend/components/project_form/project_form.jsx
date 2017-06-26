import React from 'react';
import BasicsForm from './basics_form';
import RewardsForm from './rewards_form';
import { Route, Link } from 'react-router-dom';
import { merge, values } from 'lodash';

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
    this.renderBasicsButton = this.renderBasicsButton.bind(this);
    this.renderRewardsButton = this.renderRewardsButton.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidMount() {
    this.props.fetchCategories();
  }

  componentWillUnmount() {
    this.props.clearErrors();
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
    const rewards_attributes = values(this.state.rewards);
    const project = merge({}, this.state);
    delete project.rewards;
    delete project.formType;
    delete project.rewardsNums;

    this.props.createProject(project)
      .then(data => this.props.history.push(`/projects/${data.id}`));
  }

  renderBasicsButton() {
    if (this.state.formType === "basics") {
      return (
        <button className="active-button" onClick={this.updateFormType("basics")}>
          <i className="fa fa-check-circle"></i>
          &nbsp;&nbsp; Basics
        </button>
      );
    } else {
      return (
        <button className="inactive-button" onClick={this.updateFormType("basics")}>
          <i className="fa fa-check-circle"></i>
          &nbsp;&nbsp; Basics
        </button>
      );
    }
  }

  renderRewardsButton() {
    if (this.state.formType === "rewards") {
      return (
        <button className="active-button" onClick={this.updateFormType("rewards")}>
          <i className="fa fa-check-circle"></i>
          &nbsp;&nbsp; Rewards
        </button>
      );
    } else {
      return (
        <button className="inactive-button" onClick={this.updateFormType("rewards")}>
          <i className="fa fa-check-circle"></i>
          &nbsp;&nbsp; Rewards
        </button>
      );
    }
  }

  renderErrors() {
    if (this.props.errors) {
      return (
        <ul className="project-errors">
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
	}

  render() {
    return (
      <section className="project-form">
        <ul className="project-form-nav">
          <li className="basics-button">
            {this.renderBasicsButton()}
          </li>
          <li className="rewards-button">
            {this.renderRewardsButton()}
          </li>
        </ul>
        <BasicsForm
          categories={this.props.categories}
          handleSubmit={this.handleSubmit}
          formType={this.state.formType}
          updateBasics={this.updateBasics}
          state={this.state}
          renderErrors={this.renderErrors}
        />
        <RewardsForm
          formType={this.state.formType}
          handleSubmit={this.handleSubmit}
          updateReward={this.updateReward}
          state={this.state}
          renderErrors={this.renderErrors}
        />
      </section>
    );
  }
}

export default ProjectForm;
