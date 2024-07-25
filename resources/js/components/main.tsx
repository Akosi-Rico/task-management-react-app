import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import HomePage from "./app.tsx";
import LoginPage from "./login.tsx";

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
        element: <LoginPage/>
    },
]);
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<>
     <RouterProvider router={router} />
</>);


