import CourseDetails from "../components/CourseDetails";
import PrivateRoute from "./PrivateRoute";

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
                loader: ()=>fetch('https://course-zone-server.vercel.app/courses'),
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
                path:'/course-details',
                element:<CourseDetails></CourseDetails>
            },
            {
                path:'/course/:id',
                loader: ({params})=>fetch(`https://course-zone-server.vercel.app/course/${params.id}`),
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>
            }
        ]
    }
])