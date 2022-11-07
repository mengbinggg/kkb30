/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-11-04 15:53:23
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-11-04 16:10:32
 * @Descripttion: 
 */
import React from 'react';
import Context from "./Context";

export default function Provider(props) {
    return (
        <Context.Provider value={props.store}>
            {props.children}
        </Context.Provider>
    )
}
