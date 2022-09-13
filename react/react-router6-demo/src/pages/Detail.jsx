/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-13 10:37:41
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-09-13 11:58:22
 * @Descripttion: 
 */
import React from 'react'
import { useParams, useSearchParams, useLocation } from 'react-router-dom'

export default function Detail() {
    // params传参
    // const { id, title, content } = useParams()

    // search传参
    // const [searchParams] = useSearchParams()
    // const id = searchParams.get("id")
    // const title = searchParams.get("id")
    // const content = searchParams.get("content")

    // state传参
    const { id, title, content } = useLocation().state

    // console.log(a)

    return (
        <ul>
            <li>id：{id}</li>
            <li>标题：{title}</li>
            <li>内容：{content}</li>
        </ul>
    )
}
