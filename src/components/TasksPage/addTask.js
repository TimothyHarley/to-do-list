import tasksPage from './tasksPage';
import tasksData from '../../helpers/tasksData';

const gettingTaskFromForm = () => {
  const task = {
    task: $('#newTaskToAdd').val(),
  };
  return task;
};

const addNewTask = () => {
  const newTask = gettingTaskFromForm();
  console.log(newTask);
  tasksData.addNewTask(newTask)
    .then(() => {
      tasksPage.initializeTasksPage();
    })
    .catch((error) => {
      console.error('error', error);
    });
};

$('body').on('click', '.addTask', addNewTask);
