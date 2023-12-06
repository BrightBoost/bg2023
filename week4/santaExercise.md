1. Create a new angular application
2. Create four components: Home, Header, Wish and Wishlist
3. The header is going to have two navigation links: home and wishlist. Set up routing accordingly. 
4. The Wishlist is going to be a list (`<ul>`) of clickable wishes. Each wish has an id (number) and a name (string). They come from the wish array, you can see an example at the bottom of the exercise.
5. When you click on a Wish, it sends you to the details page of that wish with the use of query params.
6. Bonus: You can remove wishes from the wishlist by clicking on a button right after the list item.
7. Bonus: You can add wishes to the wishlist by filling out a mini form underneath the wishlist (pushes the value of the wish to the wish array). You can also make this go in a separate component if you're up for a real challenge.
8. Bonus: Make it possible to put someone on the naughty list with a button. When that button is clicked, all the wishes will be removed.
9. Add a button of a little elf after a wish, if that button gets clicked, the CSS of the wish will change, indicating that it's fullfilled. 
10. Bonus: Create different wishlists for different users by adding a username to the wish list. Make a dropdown with all the users from the wishlist, and when one is selected only show those wishes.

```javascript
const wishlist = [ 
    {
        username: "Lovro", 
        wishlist: [
            {id: 1, name: "MacBook Pro"},
            {id: 2, name: "High-Resolution Dual Monitors"},
            {id: 3, name: "Ergonomic Chair"},
            {id: 4, name: "Subscription to Coding Courses"},
            {id: 5, name: "Noise-Cancelling Headphones"},
            {id: 6, name: "Professional Development Books"},
            {id: 7, name: "Software Licenses (e.g., IDEs)"},
            {id: 8, name: "Desk Organizer Set"},
            {id: 9, name: "High-Speed Internet Subscription"},
            {id: 10, name: "Coffee Machine"}
        ]
    },
    {
        username: "Lewis", 
        wishlist: [
            {id: 1, name: "MacBook Pro"},
            {id: 2, name: "High-Resolution Dual Monitors"},
            {id: 3, name: "Ergonomic Chair"},
            {id: 4, name: "Subscription to Coding Courses"},
            {id: 5, name: "Noise-Cancelling Headphones"},
            {id: 6, name: "Professional Development Books"},
            {id: 7, name: "Software Licenses (e.g., IDEs)"},
            {id: 8, name: "Desk Organizer Set"},
            {id: 9, name: "High-Speed Internet Subscription"},
            {id: 10, name: "Coffee Machine"}
        ]
    }
];
```