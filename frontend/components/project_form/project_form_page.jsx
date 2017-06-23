import React from 'react';
import ProjectForm from './project_form';

class ProjectFormPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { formType: "basics" };
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
    debugger;
    return (
      <section className="project-form-page">
        <div className="project-form-nav">
          <button class="tablink" onClick={toggleForm(e)}>Basics</button>
          <button class="tablink" onClick={toggleForm(e)}>Reward</button>
        </div>
        <p className="project-form-copy">{this.formCopy()}</p>
        <ProjectForm formType={this.state.formType} />
      </section>
    );
  }
}

export default ProjectFormPage;
