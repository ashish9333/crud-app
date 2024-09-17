import './App.css';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import User from './Components/getuser/User';


function App(){

  const route = createBrowserRouter([
    {
      path:"/",
      element:<User/>,
    },
    {
      path:"/add",
      element:"User Add Page",
    },
    {
      path:"/edit",
      element:"Update User Page",
    },
  ])

  return(
    <div className="App">
      <RouterProvider router={route}/>
        

    </div>
  );
}

export default App;
