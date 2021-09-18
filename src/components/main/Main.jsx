import React, {useEffect, useState} from 'react';
import './main.less';
import {useDispatch, useSelector} from "react-redux";
import {getRepos} from "../actions/repos";
import Repo from "./repo/Repo";

// Что такое управляемые и неуправляемые компоненты.
// Есть хуки по умолчанию, которые идут вместе с реактом, а есть и дополнительные хуки, которых нужно устанавливать как зависимости.
export default function Main() {
    const dispatch = useDispatch();
    const repos = useSelector(state => state.repos.items);
    const isFetching = useSelector(state => state.repos.isFetching)
    // Необходимо сделать поисковый инпут управляемый
    // Хук состояний, который параметром (аргументом) принимает дефолтноезначение переменной.
    const [searchValue, setSearchValue] = useState()

    useEffect(() => {
        dispatch(getRepos())
    }, []);

    function searchHandler() {
        dispatch(getRepos(searchValue))
    }

    return (
        <div className="container">
            <div className="search">
                <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" className="search-input"/>
                <button onClick={() => searchHandler()} className="search-btn">Поиск</button>
            </div>
            {
                isFetching === false
                    ? repos.map(repo => <Repo repo={ repo } />)
                    :
                    <div className="fetching">

                    </div>
            }

        </div>
    )
}