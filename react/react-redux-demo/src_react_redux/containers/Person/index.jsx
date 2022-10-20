/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-11 17:59:17
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-09-11 19:16:48
 * @Descripttion: 
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { nanoid } from 'nanoid'
import { addPerson } from '../../redux/actions/person'

class Person extends Component {
    render() {
        return (
            <div>
                <h2>我是Person组件，上方组件计数：{this.props.count}</h2>
                <input ref={c => this.nameNode = c} type="text" placeholder='请输入姓名' />
                <input ref={c => this.ageNode = c} type="text" placeholder='请输入年龄' />
                <button onClick={this.handleAdd}>添加</button>
                <ul>
                    {
                        this.props.person.map(item => {
                            return <li key={item.id}>{item.name}--{item.age}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
    handleAdd = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value
        this.props.addPerson({
            id: nanoid(),
            name,
            age
        })
        this.nameNode.value = ''
        this.ageNode.value = ''
    }
}


export default connect(
    state => ({
        count: state.count,
        person: state.person
    }),
    {
        addPerson
    }
)(Person)
