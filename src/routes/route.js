const { createBrowserRouter } = require("react-router-dom");
const { default: Blog } = require("../components/Blog");
const { default: CheckOut } = require("../components/CheckOut");
const { default: Courses } = require("../components/Courses");
const { default: ErrorPage } = require("../components/ErrorPage");
const { default: FAQ } = require("../components/FAQ");
const { default: Home } = require("../components/Home");
const { default: Login } = require("../components/Login");
const { default: Register } = require("../components/Register");
const { default: Main } = require("../layouts/Main");

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/home',
                element: <Home></Home>
            },
            {
                path:'/courses',
                loader: ()=>fetch('http://localhost:5000/courses'),
                element:<Courses></Courses>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/faq',
                element:<FAQ></FAQ>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/course/:id',
                loader: ({params})=>fetch(`http://localhost:5000/course/${params.id}`),
                element: <CheckOut></CheckOut>
            }
        ]
    }
])