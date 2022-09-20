/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-20 10:52:26
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-09-20 11:11:58
 * @Descripttion: 
 */
import React, { createRef, forwardRef } from 'react'

const Child = forwardRef((props, ref) => (
    <div>
        <input type="text" ref={ref} {...props} />
    </div>
))


export default function ForwardRefTest() {
    const inpRef = createRef()
    const getValue = () => {
        const val = inpRef.current.value
        console.log(val)
    }
    return (
        <div>
            <Child ref={inpRef} a='1' b='hello'></Child>
            <button onClick={getValue}>获取</button>
        </div>
    )
}

