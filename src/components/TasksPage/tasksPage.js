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
            <div class="form-check form-check-inline">
              <input class="form-check-input is-completed-checkbox" type="checkbox" id="${task.id}">
              <label class="form-check-label" for="inlineCheckbox1">Done</label>
            </div>
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

const updateIsCompleted = (e) => {
  const taskId = e.target.id;
  const isCompleted = e.target.checked;
  tasksData.updateDone(taskId, isCompleted)
    .then()
    .catch((err) => {
      console.error('error in updating flag', err);
    });
};

const bindEvents = () => {
  $('body').on('change', '.is-completed-checkbox', updateIsCompleted);
};

const initializeTasksPage = () => {
  tasksPage();
  bindEvents();
};


export default { initializeTasksPage };
