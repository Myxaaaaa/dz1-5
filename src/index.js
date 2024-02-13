import React from 'react'
import {createRoot} from "react-dom/client";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App'
import Reducer from "./redux/reducer"

const store = createStore(Reducer)

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
)
