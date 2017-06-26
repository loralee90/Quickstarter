import React from 'react';
import RewardsForm from './rewards_form';
import { values, merge } from 'lodash';

class BasicsForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.formType === "basics") {
      return (
        <section className="basics-form-container">
          <div className="basics-form-copy">
            <h1>Let's get started.</h1>
            <p>Make a great first impression with your project’s title and
              image, and set your funding goal, campaign duration, and
              project category.</p>
          </div>
          <form onSubmit={this.props.handleSubmit}>
            <div className="project-basics-field">
              <label className="project-basics-label">Project image</label>
              <input
                maxlength="60"
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
              <textarea
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
          </form>
        </section>
      );
    } else {
      return <p></p>;
    }
    // <button onClick={this.props.handleSubmit} className="save-project-button">Save project</button>
  }
}

export default BasicsForm;
