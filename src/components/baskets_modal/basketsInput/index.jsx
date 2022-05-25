import React from 'react';
import styles from './index.module.sass'

export const BasketsInput = () => {
    return (
        <div>
            <input className={styles.input} type="text" placeholder="Придумайте название корзины" />
            
        </div>
    );
};

