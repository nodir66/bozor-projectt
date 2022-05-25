import React from 'react';
import styles from './index.module.sass'

export const BasketsItem = (props) => {
    return (
        <div className={styles.item_container}>
            <div className={styles.text}>
                <div className={styles.name}>{props.name}</div>
                <div className={styles.sort}>{props.sort}</div>
            </div>

            <div className={styles.weight}>
                <div className={styles.weight_text}>Вес</div>
                <div className={styles.weight_num}>{props.weight} кг</div>
            </div>

            <div className={styles.price}>
                <div className={styles.price_text}>Цена</div>
                <div className={styles.price_num}>{props.price} Сум</div>
            </div>
            
        </div>
    );
};

