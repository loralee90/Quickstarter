import React from 'react';

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      end_date: "",
      funding_goal: 0,
      details: "",
      category_id: 0,
      rewards: {
        1: {title: "", description: "", cost: 0, delivery_date: ""}
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchCategories();
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createProject(this.state)
      .then(data => this.props.history.push(`/projects/${data.id}`));
  }

  updateReward(num) {
    // this.setState somehow
  }

  render() {
    if (this.props.formType === "basics") {
      return (
        <form onSubmit={this.handleSubmit}>
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
              value={this.state.title}
              onChange={this.update('title')}
            />
          </div>
          <div className="project-basics-field">
            <label className="project-basics-label">Project description</label>
            <input
              type="textarea"
              value={this.state.description}
              onChange={this.update('description')}
            />
          </div>
          <div className="project-basics-field">
            <label className="project-basics-label">Category</label>
            <select
              value={this.state.category_id}
              onChange={this.update('category_id')}>
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
              value={this.state.details}
              onChange={this.update('details')}
            />
          </div>
          <div className="project-basics-field">
            <label className="project-basics-label">End on date</label>
            <input
              type="date"
              value={this.state.end_date}
              onChange={this.update('end_date')}
            />
          </div>
          <div className="project-basics-field">
            <label className="project-basics-label">Funding goal</label>
            <input
              type="number"
              value={this.state.funding_goal}
              placeholder="$ 0"
              onChange={this.update('funding_goal')}
            />
          </div>
          <button className="project-form-button">Create project</button>
        </form>
      );
    } else {
      // <RewardForm updateReward={ this.updateReward.bind(this, rewardNumber) } />
      return (
        <form onSubmit={this.handleSubmit}>
          <div className="reward-form-container">
            <label className="reward-number">Reward #1
              <label className="reward-form-label">Title</label>
              <input
                type="text"
                value={this.state.rewards[1].title}
                onChange={this.update(this.state.rewards[1].title)}
                />
              <label className="reward-form-label">Pledge amount</label>
              <input
                type="number"
                value={this.state.rewards[1].cost}
                onChange={this.update(this.state.rewards[1].cost)}
                placeholder="$ 0"
                />
              <label className="reward-form-label">Description</label>
              <input
                type="text"
                value={this.state.rewards[1].description}
                onChange={this.update(this.state.rewards[1].description)}
                />
              <label className="reward-form-label">Estimated delivery</label>
              <input
                type="date"
                value={this.state.rewards[1].delivery_date}
                onChange={this.update(this.state.rewards[1].delivery_date)}
                />
            </label>
            <button className="project-form-button">Create project</button>
          </div>
        </form>
      );
    }
  }
}

export default ProjectForm;
