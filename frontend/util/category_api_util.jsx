export const fetchCategories = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/categories'
  });
};

export const fetchCategoryProjects = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/categories/${id}`
  });
};
