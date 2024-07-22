import React from "react";

interface LoadProps {
    imagePath: string
}

export default function Navigation({ imagePath }: LoadProps) {
    return (<>
        <nav className="bg-slate-700 flex justify-between text-lg px-2 py-2 fixed w-svw">
            <div className="flex xs:flex-col sm:flex-row px-2">
                <img src={ imagePath +"/image/logo.png" } placeholder="Navigation Logo" className="w-28 h-28"/>
                <div className="sm:flex sm:flex-col sm:px-2 sm:py-8">
                <h1 className="text-3xl font-sans font-bold text-slate-50">Task Management System</h1>
                    <h1 className="text-sm font-sans font-bold text-slate-50">(Laravel + Tailwind + React)</h1>
                </div>
               
            </div>
            <div className="sm:flex sm:flex-col px-2 py-9 xs:hidden">
                <h1 className="text-sm font-sans font-bold text-slate-50">Account: Rico Hachero Jr</h1>
                <h1 className="text-sm font-sans font-bold text-slate-50">Date: July 22, 2024</h1>
            </div>
        </nav>
    </>);
}