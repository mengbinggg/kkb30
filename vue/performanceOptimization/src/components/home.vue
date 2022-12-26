<!--
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-11-22 11:39:24
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-11-26 17:28:45
 * @Descripttion: 
-->
<template>
    <div>
        <!-- <el-card class="box-card">
            <div slot="header">字体图表</div>
            <div class="iconfont-box">
                <span class="iconfont icon-weixin"></span>
                <span class="iconfont icon-QQ"></span>
            </div>
        </el-card> -->
        <!-- <el-card class="box-card">
            <div slot="header">图片懒加载</div>
            <div class="lazy-load-box">
                <img v-for="(item, index) in imgs" :key="index" :data-url="item" v-lazy-load alt="img">
            </div>
        </el-card> -->
        <!-- <el-card class="box-card">
            <div slot="header">事件委托</div>
            <div class="event-box">
                <ul @click="handleClick2">
                    <li v-for="item in 10" :key="item" :data-index="item">this is line{{item}}</li>
                </ul>
            </div>
        </el-card> -->
        <!-- <el-card class="box-card">
            <div slot="header">防抖</div>
            <div>
                <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input" @input="fnDebounch"></el-input>
            </div>
        </el-card>
        <el-card class="box-card">
            <div slot="header">节流</div>
            <div class="throttle-box" @scroll="fnThrottle">
                <span v-for="item in 20">{{item}}</span>
            </div>
        </el-card> -->
        <!-- <el-card class="box-card">
            <div slot="header">虚拟滚动</div>
            <div class="scroll-box" ref="scrollBox" @scroll="fnVirtualScroll">
                <ul :style="paddingStyle">
                    <li v-for="item in showDataList" :key="item.id">{{item.id + '. ' + item.title}}</li>
                </ul>
            </div>
        </el-card> -->
        <el-card class="box-card">
            <div slot="header">v-for</div>
            <div class="vfor-box">
                <ul>
                    <li v-for="(item, index) in vForList" :key="index">
                        <span>{{item}}：</span>
                        <input type="text" placeholder="请输入内容">
                        <el-button type="danger" plain @click="handleDel(index)">删除</el-button>
                    </li>
                </ul>
            </div>
        </el-card>
        <!-- <el-card class="box-card">
            <div slot="header">异步组件</div>
            <div>
                <async-comp></async-comp>
            </div>
        </el-card> -->
    </div>
</template>
<script>
import _ from 'lodash'  // 引入loadsh
import { allDataList } from '../js/mockData.js'

const imgs = [
    require('../img/mock1.png'),
    require('../img/mock2.png'),
    require('../img/mock3.png'),
    require('../img/mock4.png'),
    require('../img/mock5.png')
]
export default {
    components: {
        AsyncComp: () => import('./asyncComp.vue'),
        // AsyncComp: () => ({
        //     // 需要加载的组件 (应该是一个 `Promise` 对象)
        //     component: import('./asyncComp.vue'),
        //     // 异步组件加载时使用的组件
        //     loading: {template: '<div>Loading</div>'},
        //     // 加载失败时使用的组件
        //     error: {template: '<div>error</div>'},
        //     // 展示加载时组件的延时时间。默认值是 200 (毫秒)
        //     delay: 200,
        //     // 超时时间。默认值是：`Infinity`
        //     timeout: 3000
        // })
    },
    data() {
        return {
            imgs,
            input: '',
            fnDebounch: _.debounce(this.handleInput, 300),  // 防抖
            fnThrottle: _.throttle(this.handleScroll, 300),  // 节流
            allDataList,  // 所有数据
            showDataCount: 0,  // 可视区能展示的最大条数
            itemHeight: 120,  // 每条的高度
            startIndex: 0,  // 开始数据的index
            fnVirtualScroll: _.throttle(this.handleVirtualScroll, 300),
            vForList: [
                'this is line1',
                'this is line2',
                'this is line3',
                'this is line4',
                'this is line5'
            ],
        }
    },
    computed: {
        // 结束数据的index
        endIndex() {
            let endIndex = this.startIndex + this.showDataCount
            if(endIndex > this.allDataList.length) {
                return this.allDataList.length
            }
            return endIndex
        },
        // 可视区显示数据
        showDataList() {
            return this.allDataList.slice(this.startIndex, this.endIndex)
        },
        // 上下填充高度
        paddingStyle() {
            return {
                paddingTop: this.startIndex * this.itemHeight + 'px',
                paddingBottom: (this.allDataList.length - this.endIndex) * this.itemHeight + "px"
            }
        }

    },
    mounted() {
        // 计算显示数据
        if(this.$refs.scrollBox) {
            let scrollBoxHeight = this.$refs.scrollBox.clientHeight
            this.showDataCount = Math.ceil(scrollBoxHeight / this.itemHeight) + 1
        }
    },
    methods: {
        handleClick(item) {
            console.log(item)
        },
        handleClick2(e) {
            console.log(e)
            let index = e.target.dataset.index
            console.log(index)
        },
        handleInput() {
            console.log(this.input)
        },
        handleScroll(e) {
            console.log(e.target.scrollTop)
        },
        // 虚拟滚动事件
        handleVirtualScroll(e) {
            let scrollTop = e.target.scrollTop
            this.startIndex = Math.floor(scrollTop / this.itemHeight)
        },
        handleDel(index) {
            this.vForList.splice(index, 1)
        }
    },
}
</script>
<style lang="less">
.el-card {
    margin-bottom: 20px;
}
.lazy-load-box {
    height: 500px;
    overflow: auto;
    & > img {
        width: 100%;
        height: 300px;
    }
}
.iconfont-box {
    .iconfont {
        font-size: 30px;
        color: pink;
    }
}
.event-box {
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        border: 1px solid #eee;
        li {
            padding: 0 10px;
            height: 50px;
            border-bottom: 1px solid #eee;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
}
.throttle-box {
    height: 200px;
    border: 1px solid #eee;
    display: flex;
    flex-direction: column;
    overflow: auto;
    span {
        flex-shrink: 0;
        padding: 0 10px;
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #eee;

    }
}
.scroll-box {
    height: 500px;
    overflow: auto;
    border: 1px solid #eee;
    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        padding: 0;
        margin: 0;
        li {
            height: 120px;
            line-height: 120px;
            border-bottom: 1px solid #eee;
            padding: 0 50px;
            &:nth-child(odd) {
                background-color: rgba(0, 0, 0, .05);
            }
        }
    }
}
.vfor-box {
    border: 1px solid #eee;
    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        padding: 0;
        margin: 0;
        li {
            height: 100px;
            padding: 0 20px;
            display: flex;
            align-items: center;
            &:nth-child(odd) {
                background-color: rgba(0, 0, 0, .05);
            }
            span {
                flex-shrink: 0;
            }
            input {
                flex: 1;
                border-radius: 4px;
                border: 1px solid #dcdfe6;
                box-sizing: border-box;
                color: #606266;
                height: 40px;
                line-height: 40px;
                outline: none;
                padding: 0 15px;
                width: 100%;
            }
            button {
                margin-left: 20px;
            }
        }
    }
}
</style>