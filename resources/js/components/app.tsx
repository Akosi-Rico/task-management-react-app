import React, { useState } from 'react';
import Navigation from "./nav.tsx";
import Form from './form.tsx';
import Datatable from './datatable.tsx';
interface LoadProps {
    imagePath: string;
    datatableurl: string;
    storeUrl: string;
    destroyTaskUrl: string;
}

export default function App({ imagePath, datatableurl, storeUrl, destroyTaskUrl }: LoadProps) {
    const [currentSequence, setCurrentSequence] = useState(0);
    const [taskInfo, setTaskInfo] = useState({id: "", title: "", content: "", status: ""});
    const [removeTaskId, setRemoveTaskId] = useState("");
    
    const handleCurrentSequence = (data) => {
        setCurrentSequence(data + 1);
    }

    const handleCurrentInfo = (data) => {
       setTaskInfo(t => ({...t, id: data.id, title: data.title, content: data.content, status: data.status_id}));
    }

    const handleRemoveTaskId = (id) => {
       setRemoveTaskId(id);
    }

   return (
    <>
        <Navigation imagePath={ imagePath }/>
        <div className="xs:pt-48 sm:pt-36 sm:px-2">
            <Form  
                storeUrl={storeUrl}
                currentSequence={handleCurrentSequence}
                taskInfo={taskInfo}
                removeTaskId={removeTaskId}
                destroyTaskUrl={destroyTaskUrl}
            />
            <Datatable 
                datatableurl={datatableurl} 
                currentSequence={currentSequence} 
                currentInfo={handleCurrentInfo}
                currentremoveTaskId={handleRemoveTaskId}/>
        </div>
    </>
   );
}