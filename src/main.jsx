import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css'
import Movies from "./Movies/Movies";
import Overview from "./Overview/Overview"

const router= createBrowserRouter([
  {
    path:'/',
    element:<Movies/>
  },
  {
    path:'/overview',
    element:<Overview/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>    
)
