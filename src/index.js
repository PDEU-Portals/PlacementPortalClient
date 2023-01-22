import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import data from "./components/Card/CardData"
import App from './App';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import HomePage from './pages/HomePage';
import { ProfilePage } from './pages/ProfilePage';
import CardPage from './pages/CardPage';
import Placement_stats from './components/PlacementStats/PlacementStats';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/dashboard",
    element: <div>Dashboard</div>
  },
  {
    path: "/student",
    element: <ProfilePage />
  },
  {
    path: "/community",
    element: <CardPage data={data} />
  },
  {
    path: "/placement_stats",
    element: <Placement_stats />
  }
  // {
  //   path:"/resumeBuilder",
  //   element: 
  // }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

