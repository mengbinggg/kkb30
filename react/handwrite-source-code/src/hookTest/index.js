/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-11-04 14:40:25
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-11-04 14:47:49
 * @Descripttion: 
 */
import React, {useState, useEffect} from 'react'
let count = 10
export default function Index() {
    const [val, setVal] = useState('1')

    useEffect(() => {
        setTimeout(() => {
            setVal('new val ' + count)
            count++
        }, 1000);
    }, [])
    


    return (
        <div>{val}</div>
    )
}
