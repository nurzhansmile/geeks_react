import React from 'react';
import classes from './Button.module.css'
 export const Button = ({text}) => {
    return (
        <div>
            <button className={classes.textGreen}>{text}</button>
        </div>
    );
};
