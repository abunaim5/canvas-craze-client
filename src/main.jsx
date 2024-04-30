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
import MyArtAndCrafts from './Pages/MyArtAndCrafts/MyArtAndCrafts.jsx';
import AuthProvider from './Providers/AuthProvider/AuthProvider.jsx';
import UpdateCraftDetails from './Pages/UpdateCraftDetalils/UpdateCraftDetails.jsx';
import CategoryItems from './Pages/CategoryItems/CategoryItems.jsx';
import PrivateRoute from './Routes/PrivateRoute/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch('https://canvas-craze-server.vercel.app/craftItems')
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
        loader: () => fetch('https://canvas-craze-server.vercel.app/craftItems')
      },
      {
        path: '/details/:id',
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://canvas-craze-server.vercel.app/craftItems/${params.id}`)
      },
      {
        path: '/myCrafts',
        element: <PrivateRoute><MyArtAndCrafts></MyArtAndCrafts></PrivateRoute>,
      },
      {
        path: '/updateCraft/:id',
        element: <PrivateRoute><UpdateCraftDetails></UpdateCraftDetails></PrivateRoute>,
        loader: ({params}) => fetch(`https://canvas-craze-server.vercel.app/craftItems/${params.id}`)
      },
      {
        path: '/categoryItems',
        element: <CategoryItems></CategoryItems>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
