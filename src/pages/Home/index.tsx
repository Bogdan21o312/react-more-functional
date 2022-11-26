import React, {useState} from 'react';
import {testAPI} from "../../sevices/test";
import classes from "./Home.module.scss"
import Layout from "../../components/@UI/Layout";
import {Minus, Plus} from "../../assets/images/config";
import CounterComponent from "../../components/@UI/CounterComponent";

const Index = () => {
    const {data: test, isLoading, error} = testAPI.useFetchAllTestQuery('')

    // const [count, setCount] = useState(0)
    // const [activeIncrement, setActiveIncrement] = useState(classes.Active)
    // const [activeDecrement, setActiveDecrement] = useState('')

    const incrementCounter = (max: number, setC: (p: number) => void, setAD: (a: any) => void, setAI: (p: string) => void, count: number ) => {
        max --
        max --
        if (count <= max) {
            setC(count + 1)
            setAD(classes.Active)
        } else if (count == 9) {
            setC(count + 1)
            setAI('')
        }
    }
    const decrementCounter = (setC: (p: number) => void, setAD: (a: any) => void, setAI: (p: object) => void, count: number ) => {
        if (count >= 2) {
            setC(count - 1)
            setAI(classes.Active)
        } else if (count == 1) {
            setC(count - 1)
            setAD('')
        }
    }
    //
    // const increment = () => incrementCounter(10, setCount, setActiveDecrement, setActiveIncrement, count)
    // const decrement = () => decrementCounter(setCount, setActiveDecrement, setActiveIncrement, count)

    const [count, setCount] = useState(0)
    const [activeIncrement, setActiveIncrement] = useState(classes.Active)
    const [activeDecrement, setActiveDecrement] = useState('')

    const increment = () => incrementCounter(10, setCount, setActiveDecrement, setActiveIncrement, count)
    const decrement = () => decrementCounter(setCount, setActiveDecrement, setActiveIncrement, count)
    return (
        <Layout>
            {isLoading && <h1>Loading...</h1>}
            {error && <h2>Error...</h2>}
            {test && test.map(test =>
                <div key={test.id}>
                    {test.id}
                    {test.body}
                </div>
            )}
            <h1>{count}</h1>
            <div>
                <button className={`${classes.CounterButton} ${activeIncrement}`} onClick={increment}><Plus/></button>
            </div>
            <div>
                <button className={`${classes.CounterButton} ${activeDecrement}`} onClick={decrement}><Minus/></button>
            </div>
        </Layout>
    );
};

export default Index;