### TypeScript Todo List Application

#### Objective:
Create a simple, interactive to-do list application using TypeScript and HTML.

#### Tools and Technologies:
- TypeScript
- HTML
- Basic CSS and Bootstrap (optional, for styling)

#### Step-by-Step Implementation:

#### 1. HTML Setup:
   - Create an `index.html` file.
   - Add a text input field with an id, say `taskInput`.
   - Add an 'Add Task' button with an id, say `addTaskBtn`.
   - Add an unordered list (`<ul>`) with an id, say `taskList`.

#### 2. Initialize TypeScript:
   - Create a directory for the project.
   - Set up TypeScript in your project directory (run `tsc --init` to generate a `tsconfig.json` file).
   - Create a TypeScript file named `todo.ts`.

#### 3. Start TypeScript Coding:
   - **Define the Task Class:**
     - Create a `Task` class with a property `name`.
     - Add a constructor that initializes the `name` property.

     ```typescript
     class Task {
         constructor(public name: string) {}
     }
     ```

   - **Define the TodoList Class:**
     - Create a `TodoList` class.
     - Define an array to hold `Task` objects.
     - Implement methods `addTask`, `removeTask`, and `render`.

#### 4. Implementing TodoList Methods:
   - **Add Task Method:**
     - The `addTask` method should take a task name as a parameter, create a new `Task` object, and add it to the task array.
     - Call the `render` method at the end of `addTask`.

   - **Remove Task Method:**
     - The `removeTask` method should take an index as a parameter, and remove the task at that index from the task array.
     - Call the `render` method at the end of `removeTask`.

   - **Render Method:**
     - The `render` method should clear the current list in the DOM.
     - Loop through the tasks array and for each task, create a list item (`<li>`).
     - Add a 'Remove' button to each list item with an event listener that calls `removeTask`.

#### 5. Adding Event Listeners:
   - **Add Task Event Listener:**
     - In the TypeScript file, add an event listener to the 'Add Task' button.
     - When clicked, it should get the value from the input field and call the `addTask` method of the `TodoList` class.

   - **Dynamic Remove Button Event Listener:**
     - Inside the `render` method of `TodoList`, ensure each 'Remove' button has an event listener.
     - When a 'Remove' button is clicked, it should call the `removeTask` method with the appropriate task index.

#### 6. Finalizing and Testing:
   - **Compile TypeScript:**
     - Use the TypeScript compiler to compile your `.ts` file into `.js` (e.g., run `tsc todo.ts`).
   - **Test Your Application:**
     - Open your `index.html` in a web browser and test the functionality.

#### 7. Eventually:
- You'll have the `index.html`, `todo.ts`, and compiled `todo.js` files.
- Optionally, included a CSS file or use Bootstrap for styling.

