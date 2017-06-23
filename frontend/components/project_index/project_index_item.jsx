import React from 'react';
import { Link } from 'react-router-dom';

const ProjectIndexItem = ({project}) => {
  return (
    <li className="project">
      <Link to={`/projects/${project.id}`}>
        <img src={project.image_url} alt={project.name} />
      </Link>
      <Link to={`/categories/${project.category_id}`}>
        {project.category_name}
      </Link>
      <br />
      <Link to={`/projects/${project.id}`}>
        {project.title}:
      </Link>
      <p>{project.description}</p>
      <p>by {project.creator_name}</p>
      <p>green bar</p>
      <p>{project.total_pledge_amount} pledged</p>
      <p>100% funded</p>
      <p>27 days to go</p>
    </li>
  );
};

export default ProjectIndexItem;
