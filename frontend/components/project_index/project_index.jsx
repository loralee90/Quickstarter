import React from 'react';
import ProjectIndexItem from './project_index_item';
import HeaderCarousel from './header_carousel';

class ProjectIndex extends React.Component {
  componentDidMount() {
    document.body.scrollTop = 0;
    this.props.fetchProjects();
  }

  render() {
    return (
      <section className="projects-index">
        <HeaderCarousel />
        <div className="projects-index-content">
          <h2>Featured Projects</h2>
          <ul className="projects">
            {this.props.projects.map(
              project => <ProjectIndexItem key={project.id} project={project} />
            )}
          </ul>
        </div>
      </section>
    );
  }
}

export default ProjectIndex;
