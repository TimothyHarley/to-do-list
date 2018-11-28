import $ from 'jquery';
import navHelpers from '../../helpers/navHelpers';
import tasksData from '../../helpers/tasksData';

const printTasks = (taskArray) => {
  let taskString = '';
  if (taskArray.length) {
    taskArray.forEach((task) => {
      taskString += `
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${task.task}</h5>
          </div>
        </div>`;
    });
  } else {
    taskString += 'You do not have any tasks';
  }
  $('#tasks').html(taskString);
};


const tasksPage = () => {
  const uid = navHelpers.getCurrentUid();
  tasksData.getTasks(uid)
    .then((taskArray) => {
      printTasks(taskArray);
    })
    .catch((error) => {
      console.error('error in getting tasks', error);
    });
};

const initializeTasksPage = () => {
  tasksPage();
};


export default { initializeTasksPage };
