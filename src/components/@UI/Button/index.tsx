import React, {FC, ReactNode} from 'react';
import classes from "./Button.module.scss"

interface ButtonProps {
    children: ReactNode
}

const Index:FC<ButtonProps> = ({children, ...props}) => {
    return (
        <div {...props} className={classes.Button}>
            {children}
        </div>
    );
};

export default Index;