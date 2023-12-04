import './index.css';
import {store} from "./redux/reduxStore";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";




// let Rerender = (state: ReturnType<typeof store.getState>) => {
    ReactDOM.render(
        // <App state={state} addPost = {store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}/>,
        <BrowserRouter>
            <Provider store={store}>
                {/*<App state={state} dispatch={store.dispatch.bind(store)}/>*/}
                <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
//xx}
// Rerender(store.getState())
// store.subscribe(() => {
//     let state = store.getState()
//     Rerender(state)
// })
