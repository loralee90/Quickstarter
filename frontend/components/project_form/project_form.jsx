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
      },
      imageFile: null,
      imageUrl: null
    };

    this.updateFormType = this.updateFormType.bind(this);
    this.updateBasics = this.updateBasics.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateReward = this.updateReward.bind(this);
    this.renderBasicsButton = this.renderBasicsButton.bind(this);
    this.renderRewardsButton = this.renderRewardsButton.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  componentDidMount() {
    document.body.scrollTop = 0;
    this.props.fetchProject(this.props.match.params.id);
    this.props.fetchCategories();
  }

  componentWillReceiveProps(newProps) {
    if (this.props.project !== newProps.project) {
      let rewardsNums = [];
      for (let i = 1; i <= newProps.rewards.length; i++) {
        rewardsNums.push(i);
      }

      let rewards = {};
      newProps.rewards.forEach((reward, i) => {
        rewards[i + 1] = {
          title: reward.title,
          description: reward.description,
          cost: reward.cost,
          delivery_date: reward.delivery_date,
          id: reward.id
        };
      });

      let newState = merge({}, this.state);
      newState.title = newProps.project.title;
      newState.description = newProps.project.description;
      newState.end_date = newProps.project.end_date;
      newState.funding_goal = newProps.project.funding_goal;
      newState.details = newProps.project.details;
      newState.category_id = newProps.project.category_id;
      newState.rewardsNums = rewardsNums;
      newState.rewards = rewards;
      newState.imageUrl = newProps.project.image_url;

      this.setState(newState);
    }

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
    const formData = new FormData();
    formData.append("project[title]", this.state.title);
    formData.append("project[description]", this.state.description);
    formData.append("project[end_date]", this.state.end_date);
    formData.append("project[funding_goal]", this.state.funding_goal);
    formData.append("project[details]", this.state.details);
    formData.append("project[category_id]", this.state.category_id);
    formData.append("project[rewards_attributes]", JSON.stringify(values(this.state.rewards)));

    if (this.state.imageFile) {
      formData.append("project[image]", this.state.imageFile);
    }

    if (this.props.project) {
      this.props.updateProject(this.props.project.id, formData)
        .then(data => this.props.history.push(`/projects/${data.project.id}`));
    } else {
      this.props.createProject(formData)
      .then(data => this.props.history.push(`/projects/${data.project.id}`));
    }
  }

  updateFile(e) {
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = function() {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
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
          updateFile={this.updateFile}
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
