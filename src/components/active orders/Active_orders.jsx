import { useState} from 'react';
import "./Active_orders.sass"
import right from "../../assets/img/right.png"
import applee from "../../assets/img/applee.png"
import iconpen from "../../assets/img/icon.png"
import { Progres } from './progres delivery/Progres';

export const Orders = () => {
    
    
    
   
        return (
            <div>
                <div className="orders_content">
                    <div className="container">
                        <div className="orders_block">
                            <div className="left_content">
                                <div className="title">
                                    <h1>Активные заказы</h1>
                                </div>


                                <div className="orders_item">
                                    <div className="orders_box">
                                        <div className="box_title">
                                            <p>Заказ:</p>
                                            <p>№2525253</p>
                                        </div>

                                        <div className="info">
                                            <div className="info_left">
                                                <p>Курьер:</p>
                                                <p>Марка машины:</p>
                                                <p>Номер тел:</p>
                                            </div>

                                            <div className="info_right">
                                                <p>Сардорбек Имамов</p>
                                                <p>CHevrolet Spark</p>
                                                <p>+988 90 255 33 44</p>
                                            </div>

                                            <div className="icon">
                                                <img src={right} alt="" />
                                                <p>12.03.2022г</p>
                                            </div>
                                        </div>

                                        
                                    </div>

                                    <div className="orders_box">
                                        <div className="box_title">
                                            <p>Заказ:</p>
                                            <p>№2525253</p>
                                        </div>

                                        <div className="info">
                                            <div className="info_left">
                                                <p>Курьер:</p>
                                                <p>Марка машины:</p>
                                                <p>Номер тел:</p>
                                            </div>

                                            <div className="info_right">
                                                <p>Сардорбек Имамов</p>
                                                <p>CHevrolet Spark</p>
                                                <p>+988 90 255 33 44</p>
                                            </div>

                                            <div className="icon">
                                                <img src={right} alt="" />
                                                <p>12.03.2022г</p>
                                            </div>
                                        </div>

                                        

                                        
                                    </div>

                                    <div className="orders_box">
                                        <div className="box_title">
                                            <p>Заказ:</p>
                                            <p>№2525253</p>
                                        </div>

                                        <div className="info">
                                            <div className="info_left">
                                                <p>Курьер:</p>
                                                <p>Марка машины:</p>
                                                <p>Номер тел:</p>
                                            </div>

                                            <div className="info_right">
                                                <p>Сардорбек Имамов</p>
                                                <p>CHevrolet Spark</p>
                                                <p>+988 90 255 33 44</p>
                                            </div>

                                            <div className="icon">
                                                <img src={right} alt="" />
                                                <p>12.03.2022г</p>
                                            </div>
                                        </div>

                                        
                                    </div>
                                </div>
                            </div>


                            <div className="right_content">
                                <div className="order_info">
                                    <Progres/>

                                    <div className="adreas_block">
                                        <div className="adreas_text">
                                            <p><b>Адрес доставки:</b> Мирзо Улугбек район, Хамида Алимджана площадь революции дом 22, кв 13
                                            </p>

                                        </div>

                                        <div className="adreas_button">
                                            <img  src={iconpen} alt="" />
                                        </div>
                                    </div>
                                    <div className="order_product">
                                        <div className="product_item">
                                            <div className="left_item_product">
                                                <div className="imgg">
                                                    <img src={applee} alt="" />
                                                </div>

                                                <div className="info_content">
                                                    <h2>Яблоко</h2>
                                                    <div className="sort">
                                                        <p>1 кг</p>
                                                        <p>Семеренько</p>
                                                    </div>

                                                    <h3>(15.000 Сум за 1 кг)</h3>
                                                </div>
                                            </div>


                                            <div className="right_item_product">
                                                <div className="info_content2">
                                                    <h2>Объем</h2>
                                                    <p>13</p>
                                                </div>

                                                <div className="info_content2">
                                                    <h2>Цена</h2>
                                                    <p>15.000 Сум</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="product_item">
                                            <div className="left_item_product">
                                                <div className="imgg">
                                                    <img src={applee} alt="" />
                                                </div>

                                                <div className="info_content">
                                                    <h2>Яблоко</h2>
                                                    <div className="sort">
                                                        <p>1 кг</p>
                                                        <p>Семеренько</p>
                                                    </div>

                                                    <h3>(15.000 Сум за 1 кг)</h3>
                                                </div>
                                            </div>


                                            <div className="right_item_product">
                                                <div className="info_content2">
                                                    <h2>Объем</h2>
                                                    <p>13</p>
                                                </div>

                                                <div className="info_content2">
                                                    <h2>Цена</h2>
                                                    <p>15.000 Сум</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="product_item">
                                            <div className="left_item_product">
                                                <div className="imgg">
                                                    <img src={applee} alt="" />
                                                </div>

                                                <div className="info_content">
                                                    <h2>Яблоко</h2>
                                                    <div className="sort">
                                                        <p>1 кг</p>
                                                        <p>Семеренько</p>
                                                    </div>

                                                    <h3>(15.000 Сум за 1 кг)</h3>
                                                </div>
                                            </div>


                                            <div className="right_item_product">
                                                <div className="info_content2">
                                                    <h2>Объем</h2>
                                                    <p>13</p>
                                                </div>

                                                <div className="info_content2">
                                                    <h2>Цена</h2>
                                                    <p>15.000 Сум</p>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="product_item">
                                            <div className="left_item_product">
                                                <div className="imgg">
                                                    <img src={applee} alt="" />
                                                </div>

                                                <div className="info_content">
                                                    <h2>Яблоко</h2>
                                                    <div className="sort">
                                                        <p>1 кг</p>
                                                        <p>Семеренько</p>
                                                    </div>

                                                    <h3>(15.000 Сум за 1 кг)</h3>
                                                </div>
                                            </div>


                                            <div className="right_item_product">
                                                <div className="info_content2">
                                                    <h2>Объем</h2>
                                                    <p>13</p>
                                                </div>

                                                <div className="info_content2">
                                                    <h2>Цена</h2>
                                                    <p>15.000 Сум</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
        
};

