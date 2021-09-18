import React from 'react';
import './app.less';
import { setCount } from '../reducers/reposReducer.js';
import {useDispatch, useSelector} from "react-redux";

const App = () => {
    const dispatch = useDispatch();

    // useSelector позволяет получать данные из нашего стэйта.
    const count = useSelector(state => state.repos.count);

    function onCountClick() {
        dispatch(setCount(5))
    }

    return (
        <div className="app">
            <button onClick={() =>  onCountClick()}>Count</button>
            <div>{ count }</div>

        </div>
    )
}


export default App;