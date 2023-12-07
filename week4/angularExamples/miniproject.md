### Dynamic Photo Gallery Exercise


#### Steps

1. **Setup and Project Initialization**
   - Use Angular CLI to create a new Angular project.
   - Add the FormsModule and routing module.

2. **Creating the Gallery Component**
   - Generate a new component named `gallery`.
   - In the `gallery.component.html`, create a basic structure for the gallery.

3. **Adding Image Data**
   - In `gallery.component.ts`, create an array of image objects. Each object can have properties like `id`, `url`, `title`, and `description`.

4. **Displaying Images**
   - Use `*ngFor` to loop through the image array in the HTML and display each image.
   - Utilize text interpolation to display titles and descriptions.

5. **Styling the Gallery**
   - Use CSS to style the gallery. You can make this as simple or complex as desired.
   - Implement `ngStyle` or `ngClass` to change styles dynamically based on user interaction. For example, you can make a toggle between dark mode and light mode.

6. **Adding a Filter Feature**
   - Add input elements to filter images by title or description.
   - Use `*ngIf` to display only those images that meet the filter criteria.

7. **Bonus: Creating an Image Component**
   - Generate a new component named `image`.
   - Use `@Input()` to pass data from the `gallery` component to the `image` component (like the image URL and title).

8. **Bonus: Handling User Interaction**
   - Add event binding to handle clicks on images.
   - On click, you can show a larger version of the image or additional details about the image.

9. **Implementing Two-Way Data Binding**
   - Allow users to add images. Add the form to the component that holds the image array. Use `ngModel` for two-way data binding on the input fields. When the form is submitted, append the image to the image array.

10. **Bonus: Using Routing**
    - Create different links for different views in your gallery, like different categories of images.
    - Implement `<router-outlet>` and configure routes for the gallery. Instead of having the component directly in your main component, use the `<router-outlet>` instead.
    - You can use query parameters to do a filter.


