/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-11 18:06:59
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-09-11 18:54:53
 * @Descripttion: 
 */
import { ADD_PERSON } from '../constant'

export const addPerson = (person) => ({
    type: ADD_PERSON,
    data: person
})