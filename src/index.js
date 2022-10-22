import React from "react";
import ReactDOM from "react-dom/client";
// import AppOld from "./AppOld";
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { App } from "./App";

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode >
);