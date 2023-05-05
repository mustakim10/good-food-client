import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Home/Home";
import ChefDetails from "../chefDetails/ChefDetails";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PrivateRoute from "./PrivateRoute";
import Blog from "../Blog/Blog";
import Error from "../Error/Error";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
                
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
                loader: ({params})=>fetch(`https://good-food-server-mustakim10.vercel.app/details/${params.id}`)
                
            
            }, 
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }

        ]
    }
    
])

export default router;