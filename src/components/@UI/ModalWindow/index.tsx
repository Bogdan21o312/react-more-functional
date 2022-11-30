import React, {FC,ReactNode} from 'react';
import classes from "./ModalWindow.module.scss"

interface ModalWindowProps {
    children: ReactNode
    visible: boolean
    setVisible?: any
}

const Index:FC<ModalWindowProps> = ({children, visible, setVisible}) => {

    const isVisible = visible? classes.active : ''
    const mainClasses = `${classes.modal} ${isVisible}`

    const closeModalWindow = () => {
        setVisible(false)
    }

    const stopPropagation = (e: any) => {
        e.stopPropagation()
    }
    return (
        <div className={mainClasses} onClick={closeModalWindow}>
            <div className={classes.modalContent} onClick={stopPropagation}>
                {children}
            </div>
        </div>
    );
};

export default Index;