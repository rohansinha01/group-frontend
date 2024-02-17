//We will create routes in router.js

import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App";
import ShowAll from "./pages/Index"
import { bookmarkLoader } from "./loader";
import { createAction } from "./actions";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
            <Route path="" element={<ShowAll />} loader={bookmarkLoader}/>
            <Route path="create" action={createAction}/>
        </Route>

    )
)

export default router