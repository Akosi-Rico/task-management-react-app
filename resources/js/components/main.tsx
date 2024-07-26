import React, { createContext, useContext } from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import HomePage from "./app.tsx";
import LoginPage from "./login.tsx";
import RegisterPage from "./register.tsx";
import {
    PublicImagePathContext,
    DataTableUrlContext,
    TaskStoreUrlContext,
    TaskDestroyUrlContext,
    RegisterUserUrlContext,
    LoginProcessUrlContext,
    TaskIndexUrlContext,
    LoginUrlContext,
    LogoutUrlContext,
    UserInfoContext,
    UserInfoUrlContext
} from "./UseContext/context.ts";

const router = createBrowserRouter([
    {
        path: "/task",
        element:
        <PublicImagePathContext.Provider value={publicImagePath}>
            <DataTableUrlContext.Provider value={datatableurl}>
                <TaskStoreUrlContext.Provider value={storeUrl}>
                    <TaskDestroyUrlContext.Provider value={destroyTaskUrl}>
                        <UserInfoUrlContext.Provider value={userInfoUrl}>
                            <LoginUrlContext.Provider value={loginUrl}>
                                <LogoutUrlContext.Provider value={logoutUrl}>
                                    <HomePage/>
                                </LogoutUrlContext.Provider>
                            </LoginUrlContext.Provider>
                        </UserInfoUrlContext.Provider>
                    </TaskDestroyUrlContext.Provider>
                </TaskStoreUrlContext.Provider>
            </DataTableUrlContext.Provider>
        </PublicImagePathContext.Provider>   
    },
    {
        path: "/login",
        element: 
        <PublicImagePathContext.Provider value={publicImagePath}>
            <LoginProcessUrlContext.Provider value={loginProcessUrl}>
                <TaskIndexUrlContext.Provider value={taskIndexUrl}>
                    <LoginPage/>
                </TaskIndexUrlContext.Provider>
            </LoginProcessUrlContext.Provider>
        </PublicImagePathContext.Provider>
    },
    {
        path: "/login/register",
        element:
        <PublicImagePathContext.Provider value={publicImagePath}>
            <RegisterUserUrlContext.Provider value={registerUserUrl}>
                <TaskIndexUrlContext.Provider value={taskIndexUrl}>
                    <RegisterPage/>
                </TaskIndexUrlContext.Provider>
            </RegisterUserUrlContext.Provider>
        </PublicImagePathContext.Provider>
    },
]);
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<>
     <RouterProvider router={router} />
</>);


