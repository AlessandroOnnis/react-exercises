import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { App } from "./App";
import { AppOld } from "./AppOld";

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
            {/* <AppOld/> */}
        </BrowserRouter>
    </React.StrictMode >
);