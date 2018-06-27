import React from 'react';
import ReactDom from 'react-dom'
import App from "./app";
import "./css/main.css";
import "bootstrap/dist/css/bootstrap-grid.css"

ReactDom.render(
        <App/>,
    document.getElementById("app")
)