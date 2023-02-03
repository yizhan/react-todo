import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HelloBlack from './component/HelloBlack';
import HelloWhite from './component/HelloWhite';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
        <div>
            <Routes>
                <Route path="/" element={<HelloBlack resource={''} />} />
                <Route path="/white" element={<HelloWhite resource={''} />} />
                {/* <Route path="/json-edit" element={<ConfigJsonEditor resource={''}/>} /> */}
            </Routes>
        </div>
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
