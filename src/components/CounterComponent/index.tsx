import React, {FC} from 'react';
import classes from "./Counter.module.scss"
import {Minus, Plus} from "../../assets/images/config";

interface CounterComponentProps {
    count: number
    big?: boolean
    activeIncrement: (p: string) => void
    activeDecrement: string
    incrementCounterMore: () => void
    decrementCounterMore: () => void
    increment: () => void
    decrement: () => void
}

const Index: FC<CounterComponentProps> = ({
                                              count,
                                              activeIncrement,
                                              activeDecrement,
                                              increment,
                                              decrement,
                                              big,
                                              decrementCounterMore,
                                              incrementCounterMore
                                          }) => {
    return (
        big
            ?
            <div className={classes.CounterBody}>
                <div className={classes.CounterBigBody}>
                    <div className={classes.CounterBigBigCount}>
                        <div className={classes.CounterBigCountPlusMines}>
                            <button className={`${classes.CounterButton} ${activeIncrement}`}
                                    onClick={incrementCounterMore}><Plus/></button>
                        </div>
                    </div>
                    <div className={classes.CounterBigItems}>
                        <div className={classes.CounterBigItem}>
                            <div className={classes.CounterBigCountPlusMines}>
                                <button className={`${classes.CounterButton} ${activeIncrement}`} onClick={increment}>
                                    <Plus/></button>
                            </div>
                            <div className={classes.Count}>{count}</div>
                            <div className={classes.CounterBigCountPlusMines}>
                                <button className={`${classes.CounterButton} ${activeIncrement}`} onClick={decrement}>
                                    <Minus/></button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className={`${classes.CounterButton} ${activeDecrement}`} onClick={decrementCounterMore}>
                            <Minus/></button>
                    </div>
                </div>
            </div>
            :
            <div className={classes.CounterBody}>
                <div className={classes.CounterBigItems}>
                    <div className={classes.CounterBigItem}>
                        <div className={classes.CounterBigCountPlusMines}>
                            <button className={`${classes.CounterButton} ${activeIncrement}`} onClick={increment}>
                                <Plus/></button>
                        </div>
                        <div className={classes.Count}>{count}</div>

                        <div className={classes.CounterBigCountPlusMines}>
                            <button className={`${classes.CounterButton} ${activeIncrement}`} onClick={decrement}>
                                <Minus/></button>
                        </div>
                    </div>
                </div>
            </div>

    );
};

export default Index;