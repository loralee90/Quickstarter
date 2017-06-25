import React from 'react';
import RewardsForm from './rewards_form';
import { values, merge } from 'lodash';

class BasicsForm extends React.Component {
  constructor(props) {
    super(props);

    // this.props.state = {
    //   title: "",
    //   description: "",
    //   end_date: "",
    //   funding_goal: 0,
    //   details: "",
    //   category_id: 0,
    //   rewards: {
    //     1: {title: "", description: "", cost: 0, delivery_date: ""}
    //   }
    // };

    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.updateReward = this.updateReward.bind(this);
  }

  // componentDidMount() {
  //   this.props.fetchCategories();
  // }

  // update(field) {
  //   return e => this.setState({[field]: e.currentTarget.value});
  // }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   const rewards_attributes = values(this.state.rewards);
  //   const project = merge({}, this.state);
  //   delete project.rewards;
  //   project.rewards_attributes = rewards_attributes;
  //
  //   this.props.createProject(project)
  //     .then(data => this.props.history.push(`/projects/${data.id}`));
  // }

  // updateReward(rewardNum, field) {
  //   return e => {
  //     this.setState({ rewards: { [rewardNum]: { [field]: e.currentTarget.value } } });
  //   };
  // }

  render() {
    if (this.props.formType === "basics") {
      return (
        <form onSubmit={this.props.handleSubmit}>
          <div className="project-basics-field">
            <label className="project-basics-label">Project image</label>
            <input
              type="file"
              id="project_photo"
              value=""
            />
          </div>
          <div className="project-basics-field">
            <label className="project-basics-label">Project title</label>
            <input
              type="text"
              value={this.props.state.title}
              onChange={this.props.updateBasics('title')}
            />
          </div>
          <div className="project-basics-field">
            <label className="project-basics-label">Project description</label>
            <input
              type="textarea"
              value={this.props.state.description}
              onChange={this.props.updateBasics('description')}
            />
          </div>
          <div className="project-basics-field">
            <label className="project-basics-label">Category</label>
            <select
              value={this.props.state.category_id}
              onChange={this.props.updateBasics('category_id')}>
              <option disabled="true">Select a category</option>
              {this.props.categories.map(category => {
                return <option value={category.id} key={category.id}>{category.name}</option>;
              })}
            </select>
          </div>
          <div className="project-basics-field">
            <label className="project-basics-label">Project details</label>
            <input
              type="textarea"
              value={this.props.state.details}
              onChange={this.props.updateBasics('details')}
            />
          </div>
          <div className="project-basics-field">
            <label className="project-basics-label">End on date</label>
            <input
              type="date"
              value={this.props.state.end_date}
              onChange={this.props.updateBasics('end_date')}
            />
          </div>
          <div className="project-basics-field">
            <label className="project-basics-label">Funding goal</label>
            <input
              type="number"
              value={this.props.state.funding_goal}
              placeholder="$ 0"
              onChange={this.props.updateBasics('funding_goal')}
            />
          </div>
          <button className="save-project-button">Save project</button>
        </form>
      );
    } else {
      return <p></p>;
    }
  }
}

export default BasicsForm;
