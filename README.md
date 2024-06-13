# favbooks-vue

A simple RUD (not CRUD) Using Vue 3 along with Pinia for state management.
You can search for books, delete them and adding them to favorites.

As the main goal was to learn more about Vue, I also set my goal to learn more about TailwindCSS and thus  
I focused a bit more having a responsive design.

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

## What have I learned?

- Basic knowledge about Pinia stores, making a little store to manage books with getters and actions.
- Basic Vue Router management, I tend to compare it with Angular Router, which it's pretty much the same concept.
- A LOT of TailwindCSS, in fact my main focus was to do everything with TailwindCSS, as prior to this project I didn't know that much of it, but now I have a lot of things in mind and learned very much in this aspect. (Though I still needed some external help, AKA Documentation, Google etc.)

## Not implemented features (or failing features)

- A route and component to edit a book.
- A route and component to create a new book.
- The route changes, but it is not reflected in the URL.
- The paginator does not change to the page 1 when you switch between routes. Making for example that if you are in main page 4, and switch to Favorite Books, you will be on page 4 and that can lead to misunderstanding, since FavBooks can have less than 4 pages.
