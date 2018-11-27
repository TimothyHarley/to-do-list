import axios from 'axios';
import apiKeys from '../../db/apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getTasks = () => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/tasks.json`)
    .then((results) => {
      const tasksObject = results.data;
      const taskArray = [];
      if (tasksObject !== null) {
        Object.keys(tasksObject).forEach((taskId) => {
          tasksObject[taskId].id = taskId;
          taskArray.push(tasksObject[taskId]);
        });
      }
      resolve(taskArray);
    })
    .catch((error) => {
      reject(error);
    });
});

const addNewTask = taskObject => axios.post(`${firebaseUrl}/tasks.json`, JSON.stringify(taskObject));

export default { getTasks, addNewTask };
