const SET_COUNT = "SET_COUNT";

const defaultState = {
    items: [],
    isFetching: true,
    count: 0
};

// Каждый раз когда происходит действие, берется девойлтое состояние и в зависимости от типа действия изменияет это состояние в хранилище, поправка:
// не изменяет состояние в хранилище, а именно переписывает находщейся там состояние с новым условием.
// Reducer каждый раз должен возвращать новое состояние, а не измененное переданное, т. е. нужно реализовать чистую функцию.
export default function reposReducer(state = defaultState, action) {
    // console.log('state: ', state);
    // console.log('action: ', action);

    switch (action.type) {
        case SET_COUNT:
            return {
                ...state,
                count: action.payload
            }

        default:
            return state
    }
}

// Функция action криэйтор, которая возвращает действие с данными которая нужна для редюсера.
export const setCount = (count) => ({ type: SET_COUNT, payload: count });