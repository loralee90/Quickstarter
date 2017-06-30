export const fetchSearchResults = search => {
  return $.ajax({
    method: 'GET',
    url: '/api/projects/search',
    data: {search}
  });
};
