import {useIncrement} from "../customHook/UserIncrement";

export function Counter1() {
    const [count, setCount] = useIncrement(1);

    return (
        <>
            <h1>Count : {count}</h1>
            <button onClick={() => setCount(count)}>add</button>
        </>
    )
}