import axios from 'axios';
import {setFetchError, setIsFetching, setRepos} from "../../reducers/reposReducer";

// Функции нужноименовать, тематически правильно, что-бы было понятно что они выполняют.
// Библиотека axios построена на promis промисах, следовательно можно использовать async await
// Тут используется хранилеще редакс.
export const getRepos = (searchQuery = "stars:%3E1", currentPage, perPage) => {
    return async (dispatch) => {
        if (searchQuery === "") {
            searchQuery = "stars:%3E1";
        }

        try {
            dispatch(setIsFetching(true));
            const response = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&per_page=${perPage}&page=${currentPage}`);
            dispatch(setRepos(response.data));
        } catch(e) {
            dispatch(setFetchError(true));
            dispatch(setIsFetching(false));

            setTimeout(() => {
                dispatch(setFetchError(false));
            }, 2000);
        }
    }
};

// Можно сделать
// async делает функцию асинхронной, что-бы код выполнялся полседовательно.
export const getCurrentRepo = async (userName, repoName, setRepo) => {
    const response = await axios.get(`https://api.github.com/repos/${userName}/${repoName}`);
    setRepo(response.data)
};

export const getContributors = async (userName, repoName, SetContributors) => {
    const response = await axios.get(`https://api.github.com/repos/${userName}/${repoName}/contributors?page=1&per_page=10`);
    SetContributors(response.data)
};