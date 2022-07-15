import { useDispatch, useSelector } from "react-redux";
import { decrementCounter, incrementCounter, resetCounter } from "../services/actions/counterActions"

const Counter = () => {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();
    const handleIncrement = () => {
        dispatch(incrementCounter())
    };
    const handleDecrement = () => {
        dispatch(decrementCounter())
    };
    const handleReset = () => {
        dispatch(resetCounter())
    }

    return (
        <div>
            <h1>Let's Count Your Days For Die</h1>

            <h2>Count: {count}</h2>
            <button onClick={handleIncrement}>Clik To Die</button>
            <button onClick={handleDecrement}>Reborn</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};
export default Counter;

// C