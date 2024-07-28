import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useRoute } from 'ziggy-js';

import {
    usePublicPathImageContext,
} from "./UseContext/context.ts";

export default function Navigation() {
    const route = useRoute();
    const csrfToken = (document.querySelector('meta[name="csrf-token"]') as HTMLMetaElement).getAttribute('content');
    const path = usePublicPathImageContext();
    const [user, setUser] = useState({ name: "", currentDate: ""});
    const handleUserLogout = () => {
        Axios.post(route("user.logout"), {
            _token: csrfToken,
          }, {
            headers: {
              'Content-Type': 'application/json',
            }
          }
        )
        .then(function (response) {
            if (response.status == 200) {
                location.href = route("login");
            }
        });
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            Axios.get(route("user.info"))
            .then(function (response) {
                if (response.status == 200) {
                    setUser(u =>({...u, name: response.data.name, currentDate: response.data.currentDate}));
                }
            });
        }, 100);
        return () => clearTimeout(timeout);
    },[]);

    return (<>
        <nav className="bg-slate-700 flex justify-between text-lg px-2 py-2 fixed w-svw">
            <div className="flex xs:flex-col sm:flex-row px-2">
                <img src={ path +"/image/logo.png" } placeholder="Navigation Logo" className="w-28 h-28"/>
                <div className="sm:flex sm:flex-col sm:px-2 sm:py-8">
                <h1 className="text-3xl font-sans font-bold text-slate-50">Task Management System</h1>
                    <h1 className="text-sm font-sans font-bold text-slate-50">(Laravel + Tailwind + React)</h1>
                </div>
               
            </div>
            <div className="sm:flex sm:flex-col px-2 py-9 xs:hidden">
                <h1 className="text-sm font-sans font-bold text-slate-50">Account: { user.name }</h1>
                <h1 className="text-sm font-sans font-bold text-slate-50">Date:  { user.currentDate }</h1>
                <button className="danger-button p-0 m-0" onClick={() => handleUserLogout() }>
                    Logout
                </button>
            </div>
        </nav>
    </>);
}