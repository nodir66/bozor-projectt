import React from 'react';
import "./Progres.css"
import check from "../../../assets/img/check.png"

export const Progres = () => {
    return (
        <div>
            <div class="containerrr">
                <div class="progress-container">
                     <div class="progress" id="progress"></div>

                     <div class="circles active">
                         <img src={check} alt="" />
                     </div>

                     <div class="circles">2</div>

                     <div class="circles">3</div>
                     
                </div>
                    
            </div>

            <div className="text">
                <p>Собирается</p>
                <p>Доставляется</p>
                <p>Завершен</p>
            </div>
            
        </div>
    );
};

