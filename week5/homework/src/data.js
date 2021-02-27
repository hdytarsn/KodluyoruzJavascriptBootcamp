import { API_URL } from './constants';

export const getTasksFromApi = () => {
  return fetch(API_URL)
    .then((data) => data.json())
    .then((data) => data);
};

export const addTaskToApi = (task) => {
  return fetch(API_URL, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  });
};

export const deleteTaskFromApi = (id) => {
  return fetch(`${API_URL}/${id}`, {
    method: 'delete',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};
