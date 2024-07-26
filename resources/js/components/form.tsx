import React, { useState, useEffect } from "react";
import Axios from "axios";
interface FormProps {
    storeUrl: string;
    currentSequence: (data) => void;
    taskInfo: {
        id: number;
        title: string;
        content: string;
        status: string;
    },
    removeTaskId: number;
    destroyTaskUrl: string;
}

export default function Form({storeUrl, currentSequence, taskInfo, removeTaskId, destroyTaskUrl }: FormProps) {
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [status, setStatus] = useState("");
    const [sequence, setSequence] = useState(0);
    const [unknownError, setUnknownError] = useState("");
    const [errors, setErrors] = useState({"payload.title": "", "payload.task": "", "payload.status": ""});

    const setTitleValue = (event) => {
        setTitle(event.target.value);
    }

    const setContentValue = (event) => {
        setContent(event.target.value);
    }

    const setStatusValue = (event) => {
        setStatus(event.target.value);
    }

    const setErrorDetail = (title = null, task = null, status = null) => {
        setErrors(e => ({ ...e, "payload.title": title,  "payload.task": task, "payload.status": status }));
    }

    const SubmiData = () => {
        Axios.post(`${storeUrl}`, {
            payload: {
                id: id,
                title: title,
                task: content,
                status: status
            },
        })
        .then(function (response) {
            if (response.data) {
                setSequence(s => s + 1);
                currentSequence(sequence);
                setTitle("");
                setContent("");
                setStatus("");
                setId("");
                setUnknownError("");
                setErrorDetail();
            }
        })
        .catch(function (error) {
            if (error.response.status == 422) {
                setErrorDetail(
                    error.response.data.errors["payload.title"],
                    error.response.data.errors["payload.task"],
                    error.response.data.errors["payload.status"]);
            } else {
                setUnknownError(error.response.data.message)
            }
        });
    }

    const HandleRemoveTask = (id) => {
        if (id) {
            Axios.delete(`${destroyTaskUrl}/`+id)
            .then(function (response) {
                if (response.data) {
                    setSequence(s => s + 1);
                    currentSequence(sequence);
                }
            });
        }
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setId(taskInfo.id);
            setTitle(taskInfo.title);
            setContent(taskInfo.content);
            setStatus(taskInfo.status);
        }, 100);
        return () => clearTimeout(timeout);
    }, [taskInfo]);

    useEffect(() => {
        const taskRemove = setTimeout(() => {
            HandleRemoveTask(removeTaskId);
        }, 100);
        return () => clearTimeout(taskRemove);
    }, [removeTaskId]);

    return (
        <>
            {
                unknownError && (
                    <div className="flex justify-center items-center py-2 bg-red-500 my-2">
                        <p className="error-text-unknown">{unknownError}</p>
                    </div>
                )
            }
           <div className="flex border py-8 px-1">
                <div className="flex justify-end md:w-1/2 xs:w-svw">
                    <div className="flex flex-col md:w-1/2 xs:w-full xs:mx-1">
                        <section className="w-full mx-1 my-1">
                            <label className="uppercase font-sans font-medium text-slate-700">Title</label>
                            <input  
                                className={
                                    errors["payload.title"]
                                        ? "input-field error-field"
                                        : "input-field"
                                } 
                                placeholder="Enter Title" 
                                value={title} 
                                onChange={() => setTitleValue(event)} />
                            {
                                errors["payload.title"] && (
                                    <div className="flex">
                                        <span className="error-text mx-1">
                                            {errors["payload.title"]}
                                        </span>
                                    </div>
                                )
                            }
                        </section>
                        <section className="flex flex-col w-full mx-1 my-1">
                            <label className="uppercase font-sans font-medium text-slate-700">Content</label>
                            <textarea
                                className={
                                    errors["payload.task"]
                                        ? "textarea-field h-36 error-field"
                                        : "textarea-field h-36"
                                } 
                                placeholder="Enter Title"
                                value={content}
                                onChange={() => setContentValue(event)} />
                            {
                                errors["payload.task"] && (
                                    <div className="flex">
                                        <span className="error-text mx-1">
                                            {errors["payload.task"]}
                                        </span>
                                    </div>
                                )
                            }
                        </section>
                        <div className="mx-1">
                            <button className="primary-button" onClick={() => SubmiData()}>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-start md:w-1/2 xs:w-svw">
                    <div className="flex flex-col  md:w-1/2 xs:w-full xs:mx-1">
                        <section className="w-full mx-1 my-1">
                            <label className="uppercase font-sans font-medium text-slate-700">STATUS</label>
                            <select
                                className={
                                    errors["payload.status"]
                                        ? "option-field error-field"
                                        : "option-field"
                                }  value={status}  onChange={() => setStatusValue(event)}>
                                <option value="">Select Status</option>
                                <option value={0}>Inactive</option>
                                <option value={1}>Publish</option>
                                <option value={2}>Archived</option>
                            </select>
                            {
                                errors["payload.status"] && (
                                    <div className="flex">
                                        <span className="error-text mx-1">
                                            {errors["payload.status"]}
                                        </span>
                                    </div>
                                )
                            }
                        </section>
                    </div>
                </div>
           </div>
        </>
    );
}