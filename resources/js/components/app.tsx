import React from 'react';
import Navigation from "./nav.tsx";
import Form from './form.tsx';

interface LoadProps {
    imagePath: string,
    datatableurl: string,
    storeUrl: string,
}

export default function App({ imagePath, datatableurl, storeUrl }: LoadProps) {
   return (
    <>
        <Navigation imagePath={ imagePath }/>
        <div className="xs:pt-48 sm:pt-36 sm:px-2">
            <Form datatableurl={datatableurl} storeUrl={storeUrl}/>
        </div>
    </>
   );
}