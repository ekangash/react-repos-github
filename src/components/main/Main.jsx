import React, {useEffect} from 'react';
import './main.less';
import {useDispatch, useSelector} from "react-redux";
import {getRepos} from "../actions/repos";
import Repo from "./repo/Repo";

export default function Main() {
    const dispatch = useDispatch();
    console.log('dispatch ', dispatch);
    const repos = useSelector(state => state.repos.items)

    useEffect(() => {
        dispatch(getRepos())
    }, []);

    return (
        <div className="container">
            {
                repos.map(repo => <Repo repo={ repo } />)
            }
        </div>
    )
}