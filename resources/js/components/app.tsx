import React from 'react';
import Navigation from "./nav.tsx";
import Form from './form.tsx';

interface LoadProps {
    imagePath: string
}

export default function App({ imagePath }: LoadProps) {
   return (
    <>
        <Navigation imagePath={imagePath}/>
        <div className="pt-36 px-2">
            <Form/>
        </div>
    </>
   );
}