import {useState} from "react";
import classes from "../pages/Home/Home.module.scss";


export const useCounter = (max: number) => {
    const [count, setCount] = useState(0)
    const [activeIncrement, setActiveIncrement] = useState(classes.Active)
    const [activeDecrement, setActiveDecrement] = useState('')

    const incrementCounter = () => {
        max--
        max--
        if (count <= max) {
            setCount(count + 1)
            setActiveDecrement(classes.Active)
        }
        if (count == ++max) {
            setCount(count + 1)
            setActiveIncrement('')
        }
    }
    const decrementCounter = () => {
        if (count >= 2) {
            setCount(count - 1)
            setActiveIncrement(classes.Active)
        }
        if (count == 1) {
            setCount(count - 1)
            setActiveDecrement('')
        }
    }

    return {
        count,
        incrementCounter,
        decrementCounter,
        activeIncrement,
        activeDecrement,
        max,
    }

}