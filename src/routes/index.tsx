import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";

import Home from "pages/Home";

const RoutesJSX = <Route path="/" element={<Home />}></Route>;

const routes = createRoutesFromElements(RoutesJSX);

const router = createBrowserRouter(routes);

export default router;
