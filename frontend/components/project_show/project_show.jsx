import React from 'react';

class ProjectShow extends React.Component {
  constructor(props) {
    super(props);
    this.renderProgressLine = this.renderProgressLine.bind(this);
  }

  componentDidMount() {
    this.props.fetchProject(this.props.match.params.id);
  }

  renderProgressLine() {
    const percent = (this.props.project.total_pledge_amount / this.props.project.funding_goal) * 100;
    return (
      <Line
        className="progress-bar"
        percent={percent}
        strokeWidth="1"
        strokeColor="#2BDE73"
        trailColor="#E6E7E8"
        strokeLinecap="square"
      />
    );
  }

  render() {
    return (
      <section className="project-show-container">
        <div className="project-show-header">
          <div className="show-title-author">
            <div className="show-creator-info">
              <img src={this.props.project.creator_image_url} />
            </div>
            <div className="show-title-description">
              <h2 className="show-title">
                {this.props.project.title}
              </h2>
              <p className="show-description">
                {this.props.project.description}
              </p>
            </div>
          </div>
          <div className="show-image-stats">
            <img src={this.props.project.image_url} />
            <div className="show-stats">
              {this.renderProgressLine()}
              <span className="show-pledge-amount">
                {this.props.project.total_pledge_amount}
              </span>
              <p>
                pledged of ${this.props.project.funding_goal} goal
              </p>
              <span className="show-backers">
                {this.props.project.total_backers}
              </span>
              <p>
                backers
              </p>
              <span className="show-days">

              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ProjectShow;
