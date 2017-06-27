import React from 'react';

class ProjectShow extends React.Component {
  componentDidMount() {
    this.props.fetchProject(this.props.match.params.id);
  }

  render() {
    return (
      <section className="project-show-container">
        <div className="project-show-header">
          <div className="show-title-author">
            <div className="show-creator-info">
              <img src={this.props.project.image_url} />
            </div>
            <div className="show-title-description">

            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ProjectShow;
