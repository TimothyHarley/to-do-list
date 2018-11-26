import axios from 'axios';
import apiKeys from '../../db/apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getTasks = uid => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/tasks.json?orderBy="uid"&equalTo="${uid}`)
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

export default getTasks;
