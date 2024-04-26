import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Layout/Root/Root.jsx';
import Home from './Pages/Home/Home.jsx';
import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx';
import Login from './Pages/Login/Login.jsx';
import SignUp from './Pages/SignUp/SignUp.jsx';
import AddCraftItem from './Pages/AddCraftItem/AddCraftItem.jsx';
import AllArtAndCraft from './Pages/AllArtAndCraft/AllArtAndCraft.jsx';
import ViewDetails from './Pages/ViewDetails/ViewDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/craftItems')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/addCraft',
        element: <AddCraftItem></AddCraftItem>
      },
      {
        path: '/allArtAndCraft',
        element: <AllArtAndCraft></AllArtAndCraft>,
        loader: () => fetch('http://localhost:5000/craftItems')
      },
      {
        path: '/details/:id',
        element: <ViewDetails></ViewDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/craftItems/${params.id}`)
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
