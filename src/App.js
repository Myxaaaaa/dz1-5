import React from 'react'
import {Provider} from "react-redux"
import {createStore} from "redux";
import Counter from "./pages/counter"
import Reducer from "./redux/reducer"

const App = () => {
    const store = createStore(Reducer)
    return (
        <div>
            <Provider store={store}>
                <Counter/>
            </Provider>
        </div>
    )
}

export default App