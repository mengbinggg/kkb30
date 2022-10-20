/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-10-20 16:38:31
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-10-20 17:27:55
 * @Descripttion: 
 */
import React, { useEffect } from 'react'
import axios from 'axios'

export default function Login() {
    useEffect(() => {
        axios.get('/ajax/filterCinemas?ci=1&optimus_uuid=41463E20505811ED89AF87C23DCA7A22E7E7D460F8CC4B428DD70A6C91935741&optimus_risk_level=71&optimus_code=10').then(res => {
            console.log(res)
        })
    }, [])
    return (
        <div>Login</div>
    )
}
