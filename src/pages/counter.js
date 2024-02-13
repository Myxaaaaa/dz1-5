import React from "react"
import { connect } from "react-redux"
import './style/counter.css'
import { increment, decrement, clear, addTen } from "../redux/action"

const Counter = ({ count, increment, decrement, clear, addTen }) => {
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={clear}>Очистить</button>
            <button onClick={addTen}>+10</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

export default connect(mapStateToProps, { increment, decrement, clear, addTen })(Counter)
