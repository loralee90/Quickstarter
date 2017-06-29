import React from 'react';
import ProjectIndexItem from '../project_index/project_index_item';

class CategoryShow extends React.Component {
  componentDidMount() {
    this.props.fetchCategoryProjects(this.props.match.params.id);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.props.fetchCategoryProjects(newProps.match.params.id);
    }
  }

  render() {
    if (this.props.category) {
      return (
        <section className="category-show">
          <div className="category-show-content">
            <h2 className="category-show-header">
              <span className="category-show-name">{this.props.category.name}</span>
              &nbsp;
              projects
            </h2>
            <ul className="projects">
              {this.props.projects.map(
                project => <ProjectIndexItem key={project.id} project={project} />
              )}
            </ul>
          </div>
        </section>
      );
    } else {
      return null;
    }
  }
}

export default CategoryShow;
