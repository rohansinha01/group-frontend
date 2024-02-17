//We will create routes in router.js

import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App";
import ShowAll from "./pages/Index"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
            <Route path="" element={<ShowAll />}/>
        </Route>

    )
)

export default router