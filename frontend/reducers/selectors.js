import { values } from 'lodash';

// export const selectProjectItem = ({ pokemonDetail }, itemId) => {
//   const foundItem = pokemonDetail.items.find(item => item.id === itemId);
//   return foundItem || {};
// }

export const selectAllProjects = ({projects}) => {
  return values(projects);
};

export const selectAllCategories = ({categories}) => {
  return values(categories);
};
