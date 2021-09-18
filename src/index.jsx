import React from 'react';
import { render } from 'react-dom';
import App from "./components/App";
import './index.less';
import { store } from "./reducers"
import { Provider } from "react-redux";

//Провайдерсвязывает редах с основным приложением.
render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
);