import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter,Route} from 'react-router-dom'
import {Provider} from 'mobx-react'
import store from './mobx/store'
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route component={App}/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

