import React from 'react';
import ProjectIndexItem from './project_index_item';
import HeaderCarousel from './header_carousel';
import { Route } from 'react-router-dom';

class ProjectIndex extends React.Component {
  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {
    return (
      <section className="projects-index">
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
  // <HeaderCarousel />
}

export default ProjectIndex;
