import React from "react";

interface LoadProps {
    imagePath: string
}

export default function RegisterPage({ imagePath } : LoadProps) {
    return(<>
       <div className="bg-slate-100 h-svh w-screen overflow-x-hidden">
            <div className="flex bg-slate-100 justify-center overflow-hidden">
                <div className="flex flex-col bg-slate-200 w-svw  xs:h-3/4 h-svh md:w-1/2 my-20 sm:mx-12 shadow-md rounded-xl static">
                    <div className="flex justify-center items-center relative top-[-65px]">
                        <img src={ imagePath +"/image/logo.png" } className="w-36 h-36 rounded-full bg-slate-300 "/>
                    </div>
                    <div className=" justify-center items-center sm:flex xs:flex-col text-center ">
                        <h1 className="text-3xl font-sans font-bold text-slate-700">Task Management System</h1>
                        <h1 className="text-sm font-sans font-bold text-slate-700">(Laravel + Tailwind + React)</h1>
                    </div>
                    <div className="flex flex-col justify-start items-center py-8">
                        <section className="w-1/2 mx-24 my-1">
                            <label className=" font-sans font-medium text-slate-700">Name</label>
                            <input  
                                className="input-field"
                                placeholder="Enter Fullname"
                                />
                        </section>
                        <section className="w-1/2 mx-24 my-1">
                            <label className=" font-sans font-medium text-slate-700">Email Address</label>
                            <input  
                                className="input-field"
                                placeholder="Enter Email Address" 
                            />
                        </section>
                        <section className="w-1/2 mx-24 my-1">
                            <label className=" font-sans font-medium text-slate-700">Password</label>
                            <input  
                                className="input-field"
                                type="password"
                                placeholder="Enter Password" 
                            />
                        </section>
                        <section className="w-1/2 mx-24 my-1">
                            <label className=" font-sans font-medium text-slate-700">Confirm Password</label>
                            <input
                                type="password"
                                className="input-field"
                                placeholder="Enter Confirm Password" 
                            />
                        </section>
                        <section className="w-1/2 mx-24 my-1">
                            <button className="danger-button mx-1">
                                Register
                            </button>
                        </section>
                    </div>
                </div>
            </div>
       </div>
    </>);
}