import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app.tsx";
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(<App imagePath={publicImagePath} datatableurl={datatableurl} storeUrl={storeUrl} destroyTaskUrl={destroyTaskUrl}/>);

