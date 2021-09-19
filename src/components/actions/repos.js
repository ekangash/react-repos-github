import axios from 'axios';
import {setIsFetching, setRepos} from "../../reducers/reposReducer";

// Функции нужноименовать, тематически правильно, что-бы было понятно что они выполняют.
// Библиотека axios построена на promis промисах, то можно использовать async await
export const getRepos = (searchQuery = "stars:%3E1", currentPage, perPage) => {
    return async (dispatch) => {
        if (searchQuery === "") {
            searchQuery = "stars:%3E1";
        }

        dispatch(setIsFetching(true))
        const response = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&per_page=${perPage}&page=${currentPage}`);
        dispatch(setRepos(response.data));
    }
};