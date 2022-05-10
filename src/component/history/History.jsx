import React from 'react';
import "../history/History.sass"
import Delete from '../../assets/img/delete.png'


export const History = () => {
    return (
        <div>

            <div className="history_content">
                <div className="left_block">
                    <input type="checkbox" />
                    <h1>Яблочный уксус</h1>
                </div>

                <div className="right_block">
                    <button className="search">
                        Повторить поиск
                    </button>

                    <button className="delete">
                        <img src={Delete} alt="" />
                    </button>
                </div>
            </div>
            
        </div>
    );
};



