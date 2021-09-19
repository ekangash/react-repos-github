import React, {useEffect, useState} from 'react';
import './main.less';
import {useDispatch, useSelector} from "react-redux";
import {getRepos} from "../actions/repos";
import Repo from "./repo/Repo";
import {setCurrentPage} from "../../reducers/reposReducer";
import {createPages} from "../../utils/pagesCreator";
import {Redirect} from "react-router-dom";

// Что такое управляемые и неуправляемые компоненты.
// Есть хуки по умолчанию, которые идут вместе с реактом, а есть и дополнительные хуки, которых нужно устанавливать как зависимости.
export default function Main() {
    const dispatch = useDispatch();
    const repos = useSelector(state => state.repos.items);
    const isFetching = useSelector(state => state.repos.isFetching);
    const currentPage = useSelector(state => state.repos.currentPage);
    const totalCount = useSelector(state => state.repos.totalCount);
    const perPage = useSelector(state => state.repos.perPage);
    const isFetchError = useSelector(state => state.repos.isFetchError);
    // Необходимо сделать поисковый инпут управляемый
    // Хук состояний, который параметром (аргументом) принимает дефолтноезначение переменной.
    const [searchValue, setSearchValue] = useState();
    const pagesCount = Math.ceil(totalCount/perPage);
    const pages = createPages(pagesCount, currentPage);

    // Добавиви currentPage в массив зависимостей
    // это необходимо, что бы вызывать каждый раз, когда какая-то зависисмость из массива изменяется.
    useEffect(() => {
        dispatch(getRepos(searchValue, currentPage, perPage));
    }, [currentPage]);

    function searchHandler() {
        dispatch(setCurrentPage(1));
        dispatch(getRepos(searchValue, currentPage, perPage))
    }

    // if (isFetchError) {
    //     return <Redirect to="/error" />
    // }

    return (
        <div className="container">
            {
                isFetchError &&
                <div className="alert alert-danger" role="alert">
                    Произошла ошибка! Пожалуйста обновите страницу.
                </div>
            }

            <div className="search">
                <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" className="search-input"/>
                <button onClick={() => searchHandler()} className="search-btn">Поиск</button>
            </div>
            { isFetching === false ? repos.map(repo => <Repo repo={ repo } />) : <div className="fetching" /> }

            <div className="pages">
                { pages.map((page, index) =>
                    <span
                        key={ index }
                        className={ page === currentPage ? "current-page" : "page" }
                        onClick={() => dispatch(setCurrentPage(page)) }>
                        { page }
                    </span>
                ) }
            </div>
        </div>
    )
}





































