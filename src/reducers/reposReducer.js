const SET_REPOS = "SET_REPOS";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

const defaultState = {
    items: [],
    isFetching: true,
    currentPage: 1,
    perPage: 10,
    totalCount: 0
};

// Каждый раз когда происходит действие, берется состояние по умолчанию и в зависимости от типа действия изменияет это состояние в хранилище, поправка:
// не изменяет состояние в хранилище, а именно переписывает находщейся там состояние с новым условием.
// Reducer каждый раз должен возвращать новое состояние, а не измененное переданное, т. е. нужно реализовать чистую функцию.
export default function reposReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_REPOS:
            return {
                ...state,
                items: action.payload.items,
                totalCount: action.payload.total_count,
                isFetching: false
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        default:
            return state
    }
}

// Функция action криэйтор, которая возвращает действие с данными которая нужна для редюсера.
export const setRepos = (repos) => ({ type: SET_REPOS, payload: repos });
export const setIsFetching = (bool) => ({ type: SET_IS_FETCHING, payload: bool });
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, payload: page });



