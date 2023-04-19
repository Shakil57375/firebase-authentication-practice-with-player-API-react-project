import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main/Main';
import Home from './Components/Home/Home';
import Signin from './Components/Signin/Signin';
import SignUp from './Components/SignUp/SignUp';
import Orders from './Components/Orders/Orders';
import AuthProvider from './Provider/AuthProvider';
import PrivateRouter from './Private/PrivateRouter';
import Homes from './Components/Orders/Homes'
import PlayerDetails from './Components/PlayerDetails/PlayerDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/signin',
        element : <Signin></Signin>
      },
      {
        path : '/signUp',
        element : <SignUp></SignUp>
      },
      {
        path : '/players',
        element : <PrivateRouter><Homes></Homes></PrivateRouter>,
        loader : () => fetch('https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p')
      },
      {
        path : 'service/:serviceId',
        element : <PrivateRouter><PlayerDetails></PlayerDetails></PrivateRouter>,
        loader : ({params}) => fetch(`https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=${params.serviceId}`)
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)
