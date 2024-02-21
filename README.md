# Frontend Bookmark Boys

- **Alex Greenberg**
- **Rohan Sinha**
- **Nicholas Murray**
- **Daniel Ji**

- **The Bookmarker will help us store useful links to our coding journey**

- **https://bookmark-boys.netlify.app/**

## List of Dependencies

- React
- React Router
- Sass


## Frontend Route Map

| Route Name | Path | Element | Action | Description |
|------------|----------|--------|----------|-------------|
| Bookmark Index | ""  | ShowAll  |  N/a  |  Renders all of the bookmarks on a page |
| Create Bookmark | "create" |  N/a  | createAction | Creates the new bookmark from the form |
| Update Bookmark | ":id" |   N/a  | updateAction | Updates the existing bookmark from the form  |
| Remove Bookmark | "delete/:id" | N/a | deleteAction | Deletes the bookmark selected |
| Show Bookmark | ":id" | ShowOne | N/a | Renders a detailed page of the bookmark |
