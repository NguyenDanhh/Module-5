import {useIncrement} from "../customHook/UserIncrement";

export function Counter2() {
    const [count, setCount] = useIncrement(2);

    return (
        <>
            <h1>Count : {count}</h1>
            <button onClick={() => setCount(count)}>add</button>
        </>
    )
}