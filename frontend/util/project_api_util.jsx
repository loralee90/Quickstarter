export const fetchProjects = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/projects'
  });
};
export const fetchProject = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/projects/${id}`
  });
};

export const createProject = formData => {
  return $.ajax({
    method: 'POST',
    url: '/api/projects',
    contentType: false,
    processData: false,
    data: formData
  });
};

export const updateProject = (id, formData) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/projects/${id}`,
    contentType: false,
    processData: false,
    data: formData
  });
};

export const deleteProject = id => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/projects/${id}`
  });
};
