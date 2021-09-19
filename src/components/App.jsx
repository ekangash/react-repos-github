import React from 'react';
import './app.less';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "./main/Main";

//Switch позволяет выбрать первый попавшися емму маршут и обработать, без switch роутер может обработать множжество роутеров,
// которые удовлитворяют условию.
const App = () => {
    return (
        <BrowserRouter>
             <Route path="/" component={Main}/>
        </BrowserRouter>
    )
}


export default App;