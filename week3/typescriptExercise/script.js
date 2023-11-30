"use strict";
class Task {
    constructor(name) {
        this.name = name;
    }
}
class TodoList {
    constructor(listElement) {
        this.listElement = listElement;
        this.tasks = [];
    }
    addTask(name) {
        const newTask = new Task(name);
        this.tasks.push(newTask);
        this.render();
    }
    removeTask(index) {
        this.tasks.splice(index, 1);
        this.render();
    }
    render() {
        this.listElement.innerHTML = '';
        this.tasks.forEach((task, index) => {
            const taskItem = document.createElement('li');
            taskItem.textContent = task.name;
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.addEventListener('click', () => {
                this.removeTask(index);
            });
            taskItem.appendChild(removeBtn);
            this.listElement.appendChild(taskItem);
        });
    }
}
window.onload = () => {
    const taskListElement = document.getElementById('taskList');
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const todoList = new TodoList(taskListElement);
    addTaskBtn.addEventListener('click', () => {
        if (taskInput.value) {
            todoList.addTask(taskInput.value);
            taskInput.value = '';
        }
    });
};
