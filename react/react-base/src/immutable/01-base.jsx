/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-30 10:09:21
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-09-30 14:19:28
 * @Descripttion: 
 */
import React, { Component } from 'react'
import { Seq, Map, List, fromJS, is, merge } from 'immutable'
// // Seq
// const seq = Seq([1, 2, 3, 4, 5, 6, 7, 8]).filter(item => {
//     console.log("执行了")
//     return item % 2
// })
// console.log(seq.get(1))


// // Map
// const p = {
//     name: 'Tom',
//     age: 18
// }
// const oddMap = Map(p)

// // 修改
// const newMap = Map(p).set('name', 'Jack')
// console.log(oddMap, newMap)

// // 获取
// console.log(newMap.get('name'))
// console.log(newMap.toJS().name)

// // 长度
// console.log(newMap.size);
// console.log(newMap.count());


// // List
// const arr = ['a', 'b', 'c', 'd']
// const oldList = List(arr)
// console.log(oldList)

// // 修改
// const newList = oldList.push('e')
// console.log(oldList, newList)

// // 获取
// console.log(newList.get(1));
// console.log(newList.toJS()[1]);

// // 长度
// console.log(newList.size);
// console.log(newList.count());


// List 和 Map
const person1 = {
    name: 'Tom',
    age: 18,
    likes: ['apple', 'banana', 'origin'],
    mama: {
        name: 'Marry',
        age: 56
    }
}
const person2 = {
    name: 'Tom',
    age: 18,
    likes: ['apple', 'banana', 'origin']
}
const p1 = fromJS(person1)
const p2 = fromJS(person2)
// console.log(p1, p2)

// // 相等
// console.log(person1 === person2);
// console.log(is(p1, p2));

// // 合并
// const m = fromJS({
//     sex: '男'
// })
// console.log(p1.merge(m));

// 增删改查
console.log(p1.set('sex', '男'));
console.log(p1.setIn(['mama', 'sex'], '女'));
console.log(p1.delete('age'));
console.log(p1.deleteIn(['mama', 'name']));
console.log(p1.update('age', (x) => x + 2));
console.log(p1.updateIn(['mama', 'age'], (x) => x + 2));
console.log(p1.get('age'));
console.log(p1.getIn(['mama', 'name']));


export default class Demo extends Component {
  render() {
    return (
      <div>Demo</div>
    )
  }
}
