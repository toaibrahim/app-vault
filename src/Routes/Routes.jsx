
import { createBrowserRouter} from 'react-router-dom'
import Root from '../Pages/Root/Root'
import Home from '../Pages/Home/Home'
import Apps from '../Pages/Apps/Apps'
import Installations from '../Pages/Installations/Installations'
import AppDetails from '../Pages/AppDetails/AppDetails'


export const router = createBrowserRouter([
  {
    path:'/',
    Component:Root,
    // errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        index:true,
        path:'/',
        loader: () => fetch('/trendingAppData.json'),
        Component:Home
      },
      {
        path:'/apps',
        loader:() => fetch('/allAppsData.json'),
        Component:Apps,
      },
      {
        path:'/installation',
        Component: Installations,
      },
      {
        path:'/appDetails/:id',
        loader:()=>fetch('/allAppsData.json'),
        Component: AppDetails,
      }
      
    ]
  }
])