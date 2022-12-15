import React, {FC, ReactNode} from 'react';
import classes from "./Button.module.scss"

interface ButtonProps {
    children: ReactNode
    onClick?: any
}

const Index: FC<ButtonProps> = ({children, ...props}) => {
    return (
        <button {...props} className={classes.Button}>
            {children}
        </button>
    );
};

export default Index;