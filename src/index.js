require("../styles/app.css");

import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/Header"
import Content from "./components/Content"

const text = "Image Gallery";

ReactDOM.render(
    <div>
        <Header title={text}/>
        <Content/>
    </div>,
    document.getElementById("app")
);
