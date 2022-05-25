import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.sass'
import { BasketsInput } from './basketsInput';
import { BasketsItem } from './basketsItem';
import {basketsObj} from '../baskets_modal/basketsObj/index.jsx'
import { Button } from './basketsButton/index.jsx'

export const BasketsModal = () => {
    return (
        <div className ={styles.modal_baskets}>
            <BasketsInput/>
            <div className={styles.basketitemCont}>
                {basketsObj.map((item) => {
                    return(
                       <BasketsItem
                            name = {item.name}
                            sort = {item.sort}
                            weight = {item.weight}
                            price = {item.price}
                            
                       /> 
                    )
                })}
            </div>

            <div className={styles.button_container}>
                <Button color="blue">Отменить</Button>
                <Button color="orange">Создать</Button>
            </div>
            
        </div>
    );
};

