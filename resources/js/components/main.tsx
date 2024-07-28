import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import HomePage from "./app.tsx";
import LoginPage from "./login.tsx";
import RegisterPage from "./register.tsx";
import { PublicImagePathContext } from "./UseContext/context.ts";
const router = createBrowserRouter([
    {
        path: "/task",
        element:
        <PublicImagePathContext.Provider value={ publicImagePath }>
           <HomePage/>
        </PublicImagePathContext.Provider>   
    },
    {
        path: "/login",
        element: 
        <PublicImagePathContext.Provider value={ publicImagePath }>
            <LoginPage/>
        </PublicImagePathContext.Provider>
    },
    {
        path: "/login/register",
        element:
        <PublicImagePathContext.Provider value={ publicImagePath }>
            <RegisterPage/>
        </PublicImagePathContext.Provider>
    },
]);
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<>
     <RouterProvider router={router} />
</>);


