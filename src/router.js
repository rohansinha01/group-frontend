//We will create routes in router.js

import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App";
import ShowAll from "./pages/Index"
import ShowOne from "./pages/Show";
import { bookmarkLoader, singleBookmarkLoader } from "./loader";
import { createAction, updateAction, deleteAction } from "./actions";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
            <Route path="" element={<ShowAll />} loader={bookmarkLoader}/>
            <Route path=":id" element={<ShowOne />} loader={singleBookmarkLoader} />
            <Route path="create" action={createAction}/>
            <Route path="update/:id" action={updateAction} />
            <Route path='delete/:id' action={deleteAction}/>
        </Route>

    )
)

export default router