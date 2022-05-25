import React from 'react';
import PropTypes from 'prop-types';
import { List_item } from '../list_item';
import { List_obj } from '../list_obj/list_obj';

export const List = () => {
    const addobj = () => {
        
    }
    return (
        <div>
            <div>
                <input type="text"  />
                <input type="text"  />
                <button onclick ={addobj} >add</button>
            </div>
            
            {List_obj.map((item, index) =>{
                return (
                    
                    <List_item
                        title={item.title}
                        text={item.text}
                    />
                )
            })}
            
        </div>
    );
};

