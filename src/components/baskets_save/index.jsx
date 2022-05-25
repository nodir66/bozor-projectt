import React from 'react';
import styles from './index.module.sass'
import img from '../../assets/img/Vector451.png'

export const BasketsSave = () => {
    return (
        <div className={styles.basketSave_container}>
            <div className={styles.img}>
                <img src={img} alt="" />
            </div>

            <div className={styles.text}>
                <div className={styles.top_text}>
                    Успешно
                </div>

                <div className={styles.bottom_text}>
                    Вы успешно сохранили готовую корзину. Спасибо.
                </div>
            </div>

            <div className={styles.button}>
                Перейти в готовые корзины
            </div>
            
        </div>
    );
};

