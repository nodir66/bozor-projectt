import React from 'react';
import styles from './index.module.sass'

export const List_item = (props) => {
    return (
        <div className={styles.item}>
            <div className={styles.text}>
                <h1>{props.title}</h1>
                <p>{props.text}</p>
            </div>

            <div className={styles.button}>
                
                <button>delete</button>
            </div>
            
        </div>
    );
};

