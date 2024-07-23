import React, { useState } from "react";
import Datatable from './datatable.tsx';
import Axios from "axios";
interface FormProps {
    datatableurl: string,
    storeUrl: string
}

export default function Form({ datatableurl, storeUrl }: FormProps) {
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [status, setStatus] = useState("");
    const [sequence, setSequence] =useState(0);

    const setTitleValue = (event) => {
        setTitle(event.target.value);
    }

    const setContentValue = (event) => {
        setContent(event.target.value);
    }

    const setStatusValue = (event) => {
        setStatus(event.target.value);
    }

    const SubmiData = () => {
       Axios.post(`${storeUrl}`, {
            payload: {
                id: id,
                title: title,
                task: content,
                status:status
            },
        })
        .then(function (response) {
            // if (response) {
            //     setTitle("");
            //     setContent("");
            //     setStatus("");
            //     setSequence(s => [...s + 1]);
            //     setId("");
            // }
        })
        .catch(function (error) {
           // setErrors(error.response.data.errors);
        });
    }

    return (
        <>
           <div className="flex border py-8 px-1">
                <div className="flex justify-end md:w-1/2 xs:w-svw">
                    <div className="flex flex-col md:w-1/2 xs:w-full xs:mx-1">
                        <section className="w-full mx-1 my-1">
                            <label className="uppercase font-sans font-medium text-slate-700">Title</label>
                            <input className="input-field" placeholder="Enter Title" value={title} onChange={() => setTitleValue(event)} />
                        </section>
                        <section className="flex flex-col w-full mx-1 my-1">
                            <label className="uppercase font-sans font-medium text-slate-700">Content</label>
                            <textarea
                                className="textarea-field h-36" 
                                placeholder="Enter Title"
                                value={content}
                                onChange={() => setContentValue(event)} />
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
                                className="option-field" value={status}  onChange={() => setStatusValue(event)}>
                                <option value="">Select Status</option>
                                <option value={0}>Inactive</option>
                                <option value={1}>Publish</option>
                                <option value={2}>Archived</option>
                            </select>
                        </section>
                    </div>
                </div>
           </div>
           <Datatable datatableurl={datatableurl} currentSequence={sequence}/>
        </>
    );
}