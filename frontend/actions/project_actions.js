import * as APIUtil from '../util/project_api_util';

export const RECEIVE_PROJECTS = "RECEIVE_PROJECTS";
export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const REMOVE_PROJECT = "REMOVE_PROJECT";

const receiveProjects = projects => {
  return { type: RECEIVE_PROJECTS, projects };
};

const receiveProject = project => {
  return { type: RECEIVE_PROJECT, project };
};

const removeProject = ({project, rewards}) => {
  return { type: REMOVE_PROJECT, project, rewards }
};

export const fetchProjects = () => dispatch => {
  return APIUtil.fetchProjects().then(
    projects => dispatch(receiveProjects(projects))
  );
};

export const fetchProject = id => dispatch => {
  return APIUtil.fetchProject(id).then(
    project => dispatch(receiveProject(project))
  );
};

export const createProject = project => dispatch => {
  return APIUtil.createProject(project).then(
    project => dispatch(receiveProject(project))
  );
};

export const deleteProject = id => dispatch => {
  return APIUtil.deleteProject(id).then(
    project => dispatch(removeProject(project))
  );
};
