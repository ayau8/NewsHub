import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import TechCrunch from './pages/TechCrunch';
import Bookmark from './pages/Bookmark'
import AnySearch from './pages/AnySearch'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "techcrunch",
    element: <TechCrunch />,
  },
  {
    path: "bookmark",
    element: <Bookmark />,
  },
  {
    path: "search",
    element: <AnySearch />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
