class Task {
    constructor(public name: string) {}
}

class TodoList {
    tasks: Task[] = [];

    constructor(private listElement: any) {}

    addTask(name: string): void {
        const newTask = new Task(name);
        this.tasks.push(newTask);
        this.render();
    }

    removeTask(index: number): void {
        this.tasks.splice(index, 1);
        this.render();
    }

    render(): void {
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
    const taskListElement = document.getElementById('taskList') as HTMLUListElement;
    const taskInput = document.getElementById('taskInput') as HTMLInputElement;
    const addTaskBtn = document.getElementById('addTaskBtn') as HTMLButtonElement;

    const todoList = new TodoList(taskListElement);

    addTaskBtn.addEventListener('click', () => {
        if (taskInput.value) {
            todoList.addTask(taskInput.value);
            taskInput.value = '';
        }
    });
};
