
import { createBrowserRouter} from 'react-router-dom'
import Root from '../Pages/Root/Root'
import Home from '../Pages/Home/Home'
import Apps from '../Pages/Apps/Apps'
import Installations from '../Pages/Installations/Installations'


export const router = createBrowserRouter([
  {
    path:'/',
    Component:Root,
    // errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        index:true,
        path:'/',
        Component:Home
      },
      {
        path:'/apps',
        Component:Apps,
      },
      {
        path:'/installation',
        Component: Installations,
      }
      
    ]
  }
])