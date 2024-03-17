import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {todoStore} from "./TodoStore";
import {Provider} from "mobx-react";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider todoStore={todoStore}>
            <App />
        </Provider>
    </React.StrictMode>,
)

reportWebVitals();