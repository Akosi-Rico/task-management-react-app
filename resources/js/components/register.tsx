import React, { useState } from "react";
import Axios from "axios";
import { Link } from 'react-router-dom';
import { useRoute } from 'ziggy-js';
import { usePublicPathImageContext } from "./UseContext/context.ts";

export default function RegisterPage() {
    const route = useRoute();
    const path = usePublicPathImageContext();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({"payload.email": "", "payload.name": "", "payload.password": ""});
    const [unknownError, setUnknownError] = useState("");
    const csrfToken = (document.querySelector('meta[name="csrf-token"]') as HTMLMetaElement).getAttribute('content');

    const handleName = (event) => {
        setName(event.target.value);
    }

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
    }

    const setErrorDetail = (email = null, name = null, password = null) => {
        setErrors(e => ({ ...e, "payload.email": email,  "payload.name": name, "payload.password": password }));
    }
    
    const handleUserAccount = () => {
        Axios.post(route("login.register.user"), {
            payload: {
                name: name,
                email: email,
                password: password,
                password_confirmation: confirmPassword
            },
            _token: csrfToken,
          }, {
            headers: {
              'Content-Type': 'application/json',
            }
          }
        )
        .then(function (response) {
            if (response.status == 200) {
                location.href = route("task.index");
            }
        })
        .catch(function (error) {
            if (error.response.status == 422) {
                setErrorDetail(
                    error.response.data.errors["payload.email"],
                    error.response.data.errors["payload.name"],
                    error.response.data.errors["payload.password"]);
            } else {
                setUnknownError(error.response.data.message);
                setErrorDetail();
            }
        });
    }

    return(<>
       <div className="bg-slate-100 h-svh w-screen overflow-x-hidden">
            <div className="flex bg-slate-100 justify-center overflow-hidden">
                <div className="flex flex-col bg-slate-200 w-svw  xs:h-3/4 h-svh md:w-1/2 my-20 sm:mx-12 shadow-md rounded-xl static">
                    <div className="flex justify-center items-center relative top-[-65px]">
                        <img src={ path +"/image/logo.png" } className="w-36 h-36 rounded-full bg-slate-300 "/>
                    </div>
                    <div className="justify-center items-center sm:flex xs:flex-col text-center">
                        {
                            unknownError && (
                                <div className="flex justify-center items-center py-2 bg-red-500 my-2 xs:h-3/4 h-svh md:w-1/2">
                                    <p className="error-text-unknown">{unknownError}</p>
                                </div>
                            )
                        }
                        <h1 className="text-3xl font-sans font-bold text-slate-700">Task Management System</h1>
                        <h1 className="text-sm font-sans font-bold text-slate-700">(Laravel + Tailwind + React)</h1>
                    </div>
                    <div className="flex flex-col justify-start items-center py-8">
                        <section className="w-1/2 mx-24 my-1">
                            <label className="font-sans font-medium text-slate-700">Name</label>
                            <input  
                                className={
                                    errors["payload.name"]
                                        ? "input-field error-field"
                                        : "input-field"
                                } 
                                type="text"
                                placeholder="Enter Fullname"
                                value={name}
                                onChange={() => handleName(event)}
                                />
                            {
                                errors["payload.name"] && (
                                    <div className="flex">
                                        <span className="error-text mx-1">
                                            {errors["payload.name"]}
                                        </span>
                                    </div>
                                )
                            }
                        </section>
                        <section className="w-1/2 mx-24 my-1">
                            <label className="font-sans font-medium text-slate-700">Email Address</label>
                            <input  
                                className={
                                    errors["payload.email"]
                                        ? "input-field error-field"
                                        : "input-field"
                                } 
                                type="email"
                                placeholder="Enter Email Address"
                                value={email}
                                onChange={() => handleEmail(event)}
                            />
                            {
                                errors["payload.email"] && (
                                    <div className="flex">
                                        <span className="error-text mx-1">
                                            {errors["payload.email"]}
                                        </span>
                                    </div>
                                )
                            }
                        </section>
                        <section className="w-1/2 mx-24 my-1">
                            <label className="font-sans font-medium text-slate-700">Password</label>
                            <input  
                                className={
                                    errors["payload.password"]
                                        ? "input-field error-field"
                                        : "input-field"
                                }
                                type="password"
                                placeholder="Enter Password"
                                value={password}
                                onChange={() => handlePassword(event)}
                            />
                            {
                                errors["payload.password"] && (
                                    <div className="flex">
                                        <span className="error-text mx-1">
                                            {errors["payload.password"]}
                                        </span>
                                    </div>
                                )
                            }
                        </section>
                        <section className="w-1/2 mx-24 my-1">
                            <label className="font-sans font-medium text-slate-700">Confirm Password</label>
                            <input
                                className={
                                    errors["payload.password"]
                                        ? "input-field error-field"
                                        : "input-field"
                                }
                                type="password"
                                placeholder="Enter Confirm Password"
                                value={confirmPassword}
                                onChange={() => handleConfirmPassword(event)}
                            />
                            {
                                errors["payload.password"] && (
                                    <div className="flex">
                                        <span className="error-text mx-1">
                                            {errors["payload.password"]}
                                        </span>
                                    </div>
                                )
                            }
                        </section>
                        <section className="w-1/2 mx-24 my-1">
                            <button className="danger-button mx-1" onClick={() => handleUserAccount()}>
                                Register
                            </button>
                            <Link className="warning-button mx-1" to="/login">
                                Back To Login
                            </Link>
                        </section>
                    </div>
                </div>
            </div>
       </div>
    </>);
}