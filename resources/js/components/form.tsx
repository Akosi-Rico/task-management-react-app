import React from "react";

export default function Form() {
    return (
        <>
           <div className="flex border py-4 px-1">
                <div className="flex justify-end w-1/2">
                    <div className="flex flex-col w-1/2">
                        <section className="w-full mx-1 my-1">
                            <label className="uppercase font-sans font-medium text-slate-700">Title</label>
                            <input className="input-field" placeholder="Enter Title"/>
                        </section>
                        <section className="w-full mx-1 my-1">
                            <label className="uppercase font-sans font-medium text-slate-700">Content</label>
                            <textarea
                                className="textarea-field" 
                                placeholder="Enter Title"/>
                        </section>
                    </div>
                </div>
                <div className="flex justify-start w-1/2 mx-1 my-1">
                    <div className="flex flex-col w-1/2">
                        <section className="w-full mx-1">
                            <label className="uppercase font-sans font-medium text-slate-700">STATUS</label>
                            <select
                                className="option-field">
                                <option value="">Select Status</option>
                                <option value={0}>Inactive</option>
                                <option value={1}>Publish</option>
                                <option value={2}>Archived</option>
                            </select>
                        </section>
                    </div>
                </div>
           </div>
        </>
    );
}