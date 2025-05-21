import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Components/HomePage.jsx";
import App from "./App.jsx";
import BrowseBooksPage from "./Components/BrowseBooksPage.jsx";
import AddBookPage from "./Components/AddBookPage.jsx";
import Page404 from "./Components/Page404.jsx";
import BookDetailsPage from "./Components/BookDetailsPage.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      }
      ,
      {
        path: "/browsebooks/:category",
        element: <BrowseBooksPage />,
      },
      {
        path: "/addbook",
        element: <AddBookPage />,
      },
      {
        path:"/book/:id",
        element:<BookDetailsPage/>,
      }
    ],
    errorElement: <Page404 />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    
  </StrictMode>
);
