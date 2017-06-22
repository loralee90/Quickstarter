export const fetchProjects = () => {
  return $.ajax(
    method: 'GET',
    url: '/api/projects'
  );
};

export const fetchProject = id => {
  return $.ajax(
    method: 'GET',
    url: '/api/projects/:id',
    data: id
  );
};

export const createProject = project => {
  return $.ajax(
    method: 'POST',
    url: '/api/projects',
    data: {project}
  );
}

export const deleteProject = id => {
  return $.ajax(
    method: 'DELETE',
    url: '/api/projects/:id',
    data: id
  );
}
