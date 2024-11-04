import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import StatisticsPage from './pages/StatisticsPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>Not Found</div>,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/dashboard',
        element: <DashboardPage />
      }
      ,
      {
        path: '/statistics',
        element: <StatisticsPage/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
