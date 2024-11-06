import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Choice from "../../Pages/Choice_Of Registration/Choice";
import DonarRegistration from "../../Pages/DonarRegistration/DonarRegistration";
import RecipientRegistration from "../../Pages/RecipientRegistration/RecipientRegistration";
import AdminRegistration from "../../Pages/AdminRegistration/AdminRegistration";
import FoodList from "../../Pages/FoodList/FoodList";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/choice",
                element: <Choice />
            },
            {
                path: "/donarRegistration",
                element: <DonarRegistration />
            },
            {
                path: "/recipientRegistration",
                element: <RecipientRegistration />
            },
            {
                path: "/adminRegistration",
                element: <AdminRegistration />
            },
            {
                path: "/foodList",
                element: <FoodList />
            },
        ]
    }
])
export default router;