import React from 'react';
import ProjectFormContainer from './project_form_container';

class ProjectFormPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { formType: "basics" };
    this.formCopy = this.formCopy.bind(this);
    this.updateFormType = this.updateFormType.bind(this);
  }

  updateFormType(type) {
    return () => {
      this.setState({ formType: type });
    };
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
          <button className="toggleLink" onClick={this.updateFormType("basics")}>Basics</button>
          <button className="toggleLink" onClick={this.updateFormType("rewards")}>Reward</button>
        </div>
        <p className="project-form-copy">{this.formCopy()}</p>
        <ProjectFormContainer formType={this.state.formType} />
      </section>
    );
  }
}

export default ProjectFormPage;
