import './App.css';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import User from './Components/getuser/User';
import Add from './Components/adduser/Add';
import View from './Components/viewuser/View';



function App(){

  const route = createBrowserRouter([
    {
      path:"/",
      element:<User/>,
    },
    {
      path:"/add",
      element:<Add/>,
    },
    {
      path:"/view",
      element:<View/>,
    }
  ])

  return(
    <div className="App">
      <RouterProvider router={route}/>
        

    </div>
  );
}

export default App;
