import React from 'react';
import './app.less';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import Main from "./main/Main";
import Card from "./card/Card";
import Error from "./main/repo/Error";

//Switch позволяет выбрать первый попавшися емму маршут и обработать, без switch роутер может обработать множжество роутеров,
// которые удовлитворяют условию.
const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/card/:username/:reponame" component={Card} />
                <Route exact path="/error" component={Error} />
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    )
}


export default App;