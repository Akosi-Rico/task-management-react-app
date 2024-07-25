import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import HomePage from "./app.tsx";
import LoginPage from "./login.tsx";
import RegisterPage from "./register.tsx";

const router = createBrowserRouter([
    {
        path: "/task",
        element: <HomePage 
                    imagePath={publicImagePath} 
                    datatableurl={datatableurl} 
                    storeUrl={storeUrl} 
                    destroyTaskUrl={destroyTaskUrl}/>
    },
    {
        path: "/login",
        element: <LoginPage imagePath={publicImagePath} />
    },
    {
        path: "/login/register",
        element: <RegisterPage imagePath={publicImagePath} />
    },
]);
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<>
     <RouterProvider router={router} />
</>);


