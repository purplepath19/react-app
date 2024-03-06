import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  Router,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { DayOfWeek } from "./pages/DayOfWeek.jsx";
import { About } from "./components/About.jsx";

const storedData = {
  monday: [
    {
      date: "Mon Mar 04 2024 20:52:46 GMT-0500 (Eastern Standard Time)",
      title: "Go to Bank",
      description: "Deposit checks for last week",
      notes: "N/A",
      completed: false,
    },
    {
      date: "Mon Mar 04 2024 21:52:46 GMT-0500 (Eastern Standard Time)",
      title: "Source Hot Chicken Ingredients",
      description: "Pick up cayenne peppers for hot chicken recipe",
      notes: "N/A",
      completed: false,
    },
  ],
  tuesday: [
    {
      date: "Mon Mar 04 2024 20:52:46 GMT-0500 (Eastern Standard Time)",
      title: "Go to Bank",
      description: "Deposit checks for last week",
      notes: "N/A",
      completed: false,
    },
    {
      date: "Mon Mar 04 2024 21:52:46 GMT-0500 (Eastern Standard Time)",
      title: "Source Hot Chicken Ingredients",
      description: "Pick up cayenne peppers for hot chicken recipe",
      notes: "N/A",
      completed: false,
    },
  ],
  wednesday: [
    {
      date: "Mon Mar 04 2024 20:52:46 GMT-0500 (Eastern Standard Time)",
      title: "Go to Bank",
      description: "Deposit checks for last week",
      notes: "N/A",
      completed: false,
    },
    {
      date: "Mon Mar 04 2024 21:52:46 GMT-0500 (Eastern Standard Time)",
      title: "Source Hot Chicken Ingredients",
      description: "Pick up cayenne peppers for hot chicken recipe",
      notes: "N/A",
      completed: false,
    },
  ],
  thursday: [
    {
      date: "Mon Mar 04 2024 20:52:46 GMT-0500 (Eastern Standard Time)",
      title: "Go to Bank",
      description: "Deposit checks for last week",
      notes: "N/A",
      completed: false,
    },
    {
      date: "Mon Mar 04 2024 21:52:46 GMT-0500 (Eastern Standard Time)",
      title: "Source Hot Chicken Ingredients",
      description: "Pick up cayenne peppers for hot chicken recipe",
      notes: "N/A",
      completed: false,
    },
  ],
  friday: [
    {
      date: "Mon Mar 04 2024 20:52:46 GMT-0500 (Eastern Standard Time)",
      title: "Go to Bank",
      description: "Deposit checks for last week",
      notes: "N/A",
      completed: false,
    },
    {
      date: "Mon Mar 04 2024 21:52:46 GMT-0500 (Eastern Standard Time)",
      title: "Source Hot Chicken Ingredients",
      description: "Pick up cayenne peppers for hot chicken recipe",
      notes: "N/A",
      completed: false,
    },
  ],
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="*" element={<App />} />
      <Route path="about" element={<About />} />
      <Route
        path="weekday/:day"
        element={<DayOfWeek weekData={storedData} />}
      />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
