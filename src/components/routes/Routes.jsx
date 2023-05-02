import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Home/Home";
import ChefDetails from "../chefDetails/ChefDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/details/:id',
                element: <ChefDetails></ChefDetails>,
                loader: ({params})=>fetch(`http://localhost:5000/details/${params.id}`)
                
            
            }

        ]
    }
    
])

export default router;