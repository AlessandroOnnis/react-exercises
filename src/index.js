import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { App } from "./App";
import { SWRConfig } from "swr";
// import { AppOld } from "./AppOld";

const root = ReactDOM.createRoot(document.querySelector('#root'))
const fetcher = (url) => fetch(url).then((response) => response.json())
//ho scoperto anche fetcher è una parola obbligatoria se usato qui nell'index
//certo che mancano proprio le nomenclature obbligatorie...

root.render(
    <React.StrictMode>
        <SWRConfig value={{fetcher}}>
            <BrowserRouter>
                <App />
                {/* <AppOld/> */}
            </BrowserRouter>
        </SWRConfig>
    </React.StrictMode >
);