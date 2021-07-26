import { useEffect, useState } from "react";
import "./style.css";

// function ClockWithHook(props) {
//     return <h1>Clock</h1>
// }

let massiv = [3, 4];
// let a = massiv[0];
// let b = massiv[1];

let [a, b] = massiv;

console.log(a, b);

// const setZero = n => n < 10 && "0" + n || n;
const setZero = n => n < 10 ? "0" + n : n;

const ClockWithHook = () => {
    // const massiv = useState(new Date());
    // const time = massiv[0];
    // const setTime = massiv[1];

    const [time, setTime] = useState(new Date());

    const hour = setZero(time.getHours());
    const minute = setZero(time.getMinutes());
    const second = setZero(time.getSeconds());

    useEffect(() => {
        setTimeout(() => { setTime(new Date()) }, 1000)
    }, [time])

    return <h1>{hour}:{minute}:{second}</h1>
}

export default ClockWithHook;