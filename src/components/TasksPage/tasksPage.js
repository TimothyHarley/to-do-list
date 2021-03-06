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
            <div>
              <button class="btn btn-danger btn-sm delete-btn" data-delete-id=${task.id}>delete</button>
            </div>
          </div>
        </div>`;
    });
  } else {
    taskString += 'You do not have any tasks';
  }
  $('#tasks').html(taskString);
};

const printDone = (taskArray) => {
  let taskString = '';
  if (taskArray.length) {
    taskArray.forEach((task) => {
      taskString += `
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${task.task}</h5>
            <div class="form-check form-check-inline">
              <input class="form-check-input is-completed-checkbox" type="checkbox" id="${task.id}" checked>
              <label class="form-check-label" for="inlineCheckbox1">Done</label>
            </div>
            <div>
              <button class="btn btn-danger btn-sm delete-btn" data-delete-id=${task.id}>delete</button>
            </div>
          </div>
        </div>`;
    });
  } else {
    taskString += 'You do not have any tasks';
  }
  $('#done').html(taskString);
};


const tasksPage = () => {
  const uid = navHelpers.getCurrentUid();
  tasksData.getTasks(uid)
    .then((taskArray) => {
      const result = taskArray.filter(x => x.isCompleted === false);
      printTasks(result);
    })
    .catch((error) => {
      console.error('error in getting tasks', error);
    });
};

const donePage = () => {
  const uid = navHelpers.getCurrentUid();
  tasksData.getTasks(uid)
    .then((taskArray) => {
      const result = taskArray.filter(x => x.isCompleted === true);
      printDone(result);
    })
    .catch((error) => {
      console.error('error in getting dones', error);
    });
};


const updateIsCompleted = (e) => {
  const taskId = e.target.id;
  const isCompleted = e.target.checked;
  tasksData.updateDone(taskId, isCompleted)
    .then(() => {
      tasksPage();
      donePage();
    })
    .catch((err) => {
      console.error('error in updating flag', err);
    });
};

const deleteTask = (e) => {
  const idToDelete = e.target.dataset.deleteId;
  tasksData.deleteTask(idToDelete)
    .then(() => {
      tasksPage();
      donePage();
    })
    .catch((error) => {
      console.error('error in deleting friend', error);
    });
};

const bindEvents = () => {
  $('body').on('change', '.is-completed-checkbox', updateIsCompleted);
  $('body').on('click', '.delete-btn', deleteTask);
};

const initializeTasksPage = () => {
  tasksPage();
  donePage();
  bindEvents();
};

export default { initializeTasksPage };
