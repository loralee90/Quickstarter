import React from 'react';
import ProjectForm from './project_form';

class ProjectFormPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { formType: "basics" };
    this.toggleForm = this.toggleForm.bind(this);
    this.formCopy = this.formCopy.bind(this);
  }

  toggleForm(e) {
    e.preventDefault();
    if (this.state.formType === "basics") {
      this.setState({formType: "rewards"});
    } else {
      this.setState({formType: "basics"});
    }
  }

  formCopy() {
    if (this.state.formType === "basics") {
      return "START A PROJECT!";
    } else {
      return "ADD REWARDS!";
    }
  }

  render() {
    return (
      <section className="project-form-page">
        <div className="project-form-nav">
          <button className="toggleLink" onClick={this.toggleForm}>Basics</button>
          <button className="toggleLink" onClick={this.toggleForm}>Reward</button>
        </div>
        <p className="project-form-copy">{this.formCopy()}</p>
        <ProjectForm createProject={this.props.createProject} categories={this.props.categories} formType={this.state.formType} />
      </section>
    );
  }
}

export default ProjectFormPage;
