import * as APIUtil from '../util/project_api_util';

export const RECEIVE_PROJECTS = "RECEIVE_PROJECTS";
export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const REMOVE_PROJECT = "REMOVE_PROJECT";
export const EDIT_PROJECT = "EDIT_PROJECT";

export const receiveProjects = projects => {
  return { type: RECEIVE_PROJECTS, projects };
};

window.receiveProjects = receiveProjects;

export const receiveProject = ({project, rewards}) => {
  return { type: RECEIVE_PROJECT, project, rewards };
};

export const removeProject = project => {
  return { type: REMOVE_PROJECT, project }
};

export const editProject = ({project, rewards}) => {
  return { type: EDIT_PROJECT, project, rewards }
};

export const fetchProjects = () => dispatch => {
  return APIUtil.fetchProjects().then(
    projects => dispatch(receiveProjects(projects))
  );
};

export const fetchProject = id => dispatch => {

  return APIUtil.fetchProject(id).then(
    payload => dispatch(receiveProject(payload))
  );
};

export const createProject = project => dispatch => {
  return APIUtil.createProject(project).then(
    payload => dispatch(receiveProject(payload))
  );
};

export const deleteProject = id => dispatch => {
  return APIUtil.deleteProject(id).then(
    project => dispatch(removeProject(project))
  );
};

export const updateProject = id => dispatch => {
  return APIUtil.updateProject(id).then(
    payload => dispatch(editProject(payload))
  );
};
