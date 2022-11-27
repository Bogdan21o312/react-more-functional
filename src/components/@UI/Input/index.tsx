import React from 'react';
import classes from "./Input.module.scss"

const Index = ({...props}) => {
    return (
        <input className={classes.Input} {...props}/>
    );
};

export default Index;