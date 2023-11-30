### Mini Project: Puppy Book

We'll create a full-stack web application that allows users to view, add, update, and delete puppy profiles using the provided Node.js API.

#### Tools and Technologies:

- Frontend: HTML, CSS, JavaScript, Bootstrap
- Backend: Node.js (Express)
- Data Storage: JSON files

#### Part 1: Setting Up the Node.js API

1. **Setup Node.js Environment:**
   - Set up a new Node.js project and install necessary packages (`express`, `cors`, `fs`).

2. **Implement API Endpoints:**
   - Use the provided Node.js API code as a starting point.
   - Place the `puppies.json` and `next-ids.json` files in the `data` directory.
   - Ensure the API can perform CRUD operations on puppy data. You will have to implement the PUT and DELETE endpoint

#### Part 2: Building the Frontend

1. **Web Page Structure:**
   - Create an HTML file for the application interface.
   - Use Bootstrap for styling to make development faster and the interface more user-friendly.

2. **Listing Puppy Profiles:**
   - Fetch and display a list of all puppy profiles from the API.
   - Each profile should show the puppy's name, breed, and age.

3. **Adding a New Puppy Profile:**
   - Implement a form to add a new puppy profile.
   - Ensure that the form captures the name, breed, and age of the puppy.
   - On form submission, send a POST request to the API and update the puppy list.

4. **Bonus: Updating Puppy Profiles:**
   - Next to each puppy profile, add an 'Edit' button.
   - Clicking 'Edit' should allow users to modify the puppy’s information.
   - Send a PUT request to the API with the updated data and refresh the list.

5. **Unethical Bonus: Deleting Puppy Profiles:**
   - Add a 'Delete' button next to each puppy profile.
   - Clicking 'Delete' should remove the puppy profile.
   - Send a DELETE request to the API for the selected puppy and update the list.

6. **Styling the Application:**
   - Use CSS and Bootstrap to style the application. Ensure it is responsive and has a user-friendly interface.

#### Part 3: Submission and Evaluation

- **Code Organization:** Ensure the code is well-organized, with separate files for HTML, CSS, and JavaScript.
- **Functionality:** The application should correctly interact with the Node.js API for all CRUD operations.


#### Bonus Challenges:

1. **Search Functionality:** Implement a search feature to filter puppy profiles by name or breed.
2. **Pagination:** If there are many puppy profiles, implement pagination to display a limited number of profiles per page.

