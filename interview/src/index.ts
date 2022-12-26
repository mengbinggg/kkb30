/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-12-05 13:57:02
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-12-09 11:04:58
 * @Descripttion: 
 */

import { pid } from "process"

/**
 * 时间复杂度：O(n^2)（因为数组的unshift()方式的复杂度为O(n)，另外shift、splice的复杂度都为O(n)）
 * 空间复杂度：O(1)
 */
export function rorate1(arr: number[], k: number): number[] {
    let len = arr.length
    if(!k || len === 0) return arr

    const step = Math.abs( k % len)
    for (let i = 0; i < step; i++) {
        let temp = arr.pop()
        if(temp != null) {
            arr.unshift(temp)
        }
    }
    return arr
}

/**
 * 时间复杂度：O(1)
 * 空间复杂度：O(n)
 */
export function rorate2(arr: number[], k: number): number[] {
    let len = arr.length
    if(!k || len === 0) return arr

    const step = Math.abs( k % len)
    let arr1 = arr.slice(0, len - k)
    let arr2 = arr.slice(-k)

    return arr2.concat(arr1)
}

// console.log(rorate1([1, 2, 3, 4, 5, 6, 7, 8], 3))

// 判断左右括号是否匹配
function isMatch(left: string, right: string): boolean {
    if(left === '(' && right === ')') return true
    if(left === '[' && right === ']') return true
    if(left === '{' && right === '}') return true
    return false
}

/**
 * 时间复杂度：O(n)（includes()原本复杂度为O(n)，但此处的查找范围固定为3，故可忽略）
 * 空间复杂度：O(n)
 */
export function matchBracket(str: string): boolean {
    let len = str.length
    if(len === 0) return true

    let stack = []
    let left = '([{'
    let right = ')]}'
    for (let i = 0; i < len; i++) {
        let item = str[i]

        if(left.includes(item)) {
            // 左括号，压栈
            stack.push(item)
        }else if(right.includes(item)) {
            // 右括号，判断栈顶（是否出栈）
            let top = stack[stack.length - 1]
            if(isMatch(top, item)) {
                stack.pop()
            }else {
                return false
            }
        }
    }
    return stack.length === 0
}

// console.log(matchBracket('(f[s{s}ewe]f)'))  // true
// console.log(matchBracket('(f[s{s}ewe]}f)'))  // false
// console.log(matchBracket('(f[s{(s}ewe]f))'))  // false

/**
 * 时间复杂度：入队 O(1)  出队 O(n)
 * 空间复杂度：O(n)
 */
class MyQueue {
    private stack1: number[] = []
    private stack2: number[] = []

    // 入队
    add(n: number) {
        this.stack1.push(n)
    }

    // 出队
    delete(): number | null {
        // stack1中的数据全部挪到stack2
        while(this.stack1.length) {
            let temp = this.stack1.pop()
            if(temp != null) {
                this.stack2.push(temp)
            }
        }

        // 出队
        let num = this.stack2.pop()

        // stack2中的数据全部放回到stack1
        while(this.stack2.length) {
            let temp = this.stack2.pop()
            if(temp != null) {
                this.stack1.push(temp)
            }
        }

        return num || null
    }

    get length(): number {
        return this.stack1.length
    }
}

// let q = new MyQueue()
// q.add(100)
// q.add(300)
// q.add(4000)
// console.log(q.length)
// console.log(q.delete())
// console.log(q.delete())
// console.log(q.length)

interface ILink {
    value: number,
    next?: ILink
}

function MyLink(arr: number[]): ILink {
    const len = arr.length
    if(len === 0) throw new Error('error')

    let currNode: ILink = {
        value: arr[len - 1]
    }
    if(len === 1) return currNode

    for (let i = len - 2; i >= 0; i--) {
        currNode = {
            value: arr[i],
            next: currNode
        }
    }
    return currNode
}

function reverseLink(link: ILink): ILink {
    // 定义三个指针
    let prevNode: ILink | undefined = undefined
    let currNode: ILink | undefined = undefined
    let nextNode: ILink | undefined = link

    // 当下一个节点存在
    while(nextNode) {
        // 1. 断开当前节点的指向
        if(currNode) {
            delete currNode.next
        }

        // 2. 将当前节点指向上一个节点
        if(currNode && prevNode) {
            currNode.next = prevNode
        }

        // 3. 将指针向后移位
        prevNode = currNode
        currNode = nextNode
        nextNode = nextNode.next
    }

    // 当下一个节点指向空（只需要执行第2步）
    currNode.next = prevNode

    return currNode
}

// let link = MyLink([1,2,3,4,5])
// console.log(link)
// console.log(reverseLink(link))

class MyQueueWithLink {
    private head: ILink = null
    private tail: ILink = null
    private len: number = 0

    // 尾部入队
    add(n: number) {
        if(this.tail) {
            // 尾部有值
            this.tail = this.tail.next = {
                value: n
            }
        }else {
            // 尾部为空
            this.tail = {
                value: n
            }
            this.head = this.tail
        }
        this.len++
    }

    // 头部出队
    delete(): number {
        // 头部为空
        if(!this.head || this.len <= 0) return null

        // 头部有值
        // 1. 存值，用于最后返回
        let value = this.head.value
        // 2. 将头部指向下一个节点
        this.head = this.head.next
        // 3. 长度-1
        this.len--

        return value
    }

    get length() {
        return this.len
    }
}

// let q = new MyQueueWithLink()
// q.add(100)
// q.add(200)
// q.add(300)
// q.add(400)
// q.add(500)
// console.log(q.length)
// console.log(q.delete())
// console.log(q.length)
// console.log(q.delete())
// console.log(q.delete())
// console.log(q.length)
// console.log(q.delete())
// console.log(q.length)

//循环实现
function binarySearch1(arr: number[], target: number): number {
    let len = arr.length 
    if(len == 0 || !target) return -1

    let i = 0
    let j = len - 1
    
    while(i <= j) {
        let middle = Math.floor((i + j) / 2)
        let middleVal = arr[middle]

        if(target < middleVal) {
            j = middle - 1
        }else if(target > middleVal) {
            i = middle + 1
        }else{
            return middle
        }
    }

    return -1
}
function binarySearch2(arr: number[], target: number, i?: number, j?: number): number {
    let len = arr.length 
    if(len == 0 || !target) return -1

    i = i || 0
    j = j || len - 1 

    if(i > j) return -1
    
    let middle = Math.floor((i + j) / 2)
    let middleVal = arr[middle]

    if(target < middleVal) {
        return binarySearch2(arr, target, i, middle - 1)
    }else if(target > arr[middle]) {
        return binarySearch2(arr, target, middle + 1, j)
    }else{
        return middle
    }
}

// let arr = [1,5,6,8,9,10,33,46,78,89]
// console.log(binarySearch2(arr, 8))  // 3
// console.log(binarySearch1(arr, 78))  // 8

// 双层循环
function findTwoNumber1(arr: number[], n: number): number[] {
    const res: number[] = []

    let len = arr.length
    if(len < 2) return res

    for (let i = 0; i < len - 1; i++) {
        let flag = false // 是否得到了结果

        for(let j = i + 1; j < len; j++) {
            if(arr[i] + arr[j] == n) {
                res.push(arr[i])
                res.push(arr[j])
                flag = true
                break
            }
        }
        if (flag) break
    }
    return res
}

// 双指针
function findTwoNumber2(arr: number[], n: number): number[] {
    const res: number[] = []

    let len = arr.length
    if(len < 2) return res

    let i = 0 
    let j = len - 1

    while (i < j) {
        const sum = arr[i] + arr[j]

        if (sum > n) {
            j--
        } else if (sum < n) {
            i++
        } else {
            res.push(arr[i])
            res.push(arr[j])
            break
        }
    }

    return res
}
// let arr = [1,5,6,8,9,10,33,46,78,89]
// console.log(findTwoNumber1(arr, 18))
// console.log(findTwoNumber1(arr, 34))
// console.log(findTwoNumber1(arr, 20))
// console.log(findTwoNumber2(arr, 18))
// console.log(findTwoNumber2(arr, 34))
// console.log(findTwoNumber2(arr, 20))


interface ITree {
    value: number,
    left?: ITree,
    right?: ITree
}

const tree: ITree = {
    value: 5,
    left: {
        value: 3,
        left: {
            value: 2
        },
        right: {
            value: 4
        }
    },
    right: {
        value: 7,
        left: {
            value: 6
        },
        right: {
            value: 8
        }
    }
}
// 前序遍历 [5,3,2,4,7,6,8]
// 中序遍历 [2,3,4,5,6,7,8]
// 后序遍历 [2,4,3,6,8,7,5]

// 中序遍历
function orderTraversal(tree: ITree): number[] {
    let res: number[] = []
    if(!tree) return res

    // // 前序
    // let stack = [tree]
    // while(stack.length > 0) {
    //     let node = stack.pop()

    //     res.push(node.value)
    //     node.right && stack.push(node.right)
    //     node.left && stack.push(node.left)
    // }

    // // 中序
    // let stack = []
    // while(stack.length > 0 || tree) {
    //     // 循环遍历，将所有左节点push到栈中
    //     while(tree) {
    //         stack.push(tree)
    //         tree = tree.left
    //     }

    //     // 取出 stack 最后一个节点
    //     let node = stack.pop()
    //     res.push(node.value)
    //     // 将当前节点的右节点设置为根节点
    //     node.right && (tree = node.right)
    // }

    // 后序
    let stack = [tree]
    while(stack.length > 0) {
        let node = stack.pop()

        res.push(node.value)
        node.left && stack.push(node.left)
        node.right && stack.push(node.right)
    }
    res.reverse()

    return res
}


function prevOrderTraversal(tree: ITree): number[] {
    let res: number[] = []
    if(!tree) return res

    const inner = (tree, res) => {
        res.push(tree.value)
        tree.left && inner(tree.left, res)
        tree.right && inner(tree.right, res)
    }
    inner(tree, res)

    return res
}
function inOrderTraversal(tree: ITree): number[] {
    let res: number[] = []
    if(!tree) return res

    const inner = (tree, res) => {
        tree.left && inner(tree.left, res)
        res.push(tree.value)
        tree.right && inner(tree.right, res)
    }
    inner(tree, res)

    return res
}
function nextOrderTraversal(tree: ITree): number[] {
    let res: number[] = []
    if(!tree) return res

    const inner = (tree, res) => {
        tree.left && inner(tree.left, res)
        tree.right && inner(tree.right, res)
        res.push(tree.value)
    }
    inner(tree, res)

    return res
}
// console.log(prevOrderTraversal(tree))
// console.log(inOrderTraversal(tree))
// console.log(nextOrderTraversal(tree))

function getKthValue(tree: ITree, k: number):number {
    let arr = inOrderTraversal(tree)

    return arr[k - 1]
}
// console.log(getKthValue(tree, 4))

function fibonacci1(n: number): number {
    if(n <= 1) return 0
    if(n == 2) return 1

    return fibonacci1(n - 1) + fibonacci1(n - 2)
}

function fibonacci2(n: number): number {
    if(n <= 1) return 0
    if(n == 2) return 1

    let i = 0  // 存储 n-2 的值
    let j = 1  // 存储 n-1 的值
    let res = 0
    for(let k = 3; k <= n; k++) {
        res = i + j
        i = j
        j = res
    }

    return res
}
// 0 1 1 2 3 / 5 8 13 21 34 / 55 
// console.log(fibonacci1(1))
// console.log(fibonacci1(2))
// console.log(fibonacci1(3))
// console.log(fibonacci1(5))
// console.log(fibonacci1(10))

// console.log('----')

// console.log(fibonacci2(1))
// console.log(fibonacci2(2))
// console.log(fibonacci2(3))
// console.log(fibonacci2(5))
// console.log(fibonacci2(10))

function moveZero1(arr: number[]): void {
    let len = arr.length
    if(len == 0) return

    let zeroLen = 0  // 存储0的个数
    for(let i = 0; i < len - zeroLen; i++) {
        let x = arr[i]
        if(x == 0) {
            arr.splice(i, 1)
            arr.push(0)
            i--
            zeroLen++
        }
    }
}
function moveZero2(arr: number[]): void {
    let len = arr.length
    if(len == 0) return

    let i = 0
    let j = -1  // 存储第一个0

    for(; i < len; i++) {
        if(arr[i] == 0 && j < 0) {
            j = i
        }

        if(arr[i] != 0 && j >= 0) {
            // 交换
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp

            j++
        }
    }
}

// let arr = [2,3,54,6,2,40,440,0,24,0,23,0,5,0,0,0,0,5]
// moveZero2(arr)
// console.log(arr)

interface IChar {
    char: string,
    length: number
}

function findContinuousMaxChar1(str: string): IChar {
    let res: IChar = {
        char: '',
        length: 0
    }
    
    let len = str.length
    if(len == 0) return res

    let tempLen = 0  // 连续字符临时长度
    for(let i = 0; i < len; i++) {
        tempLen = 0

        for(let j = i; j < len; j++) {
            if(str[i] == str[j]) {
                tempLen++
            }  

            // 不相等 或者 已经到了最后一个元素，要去判断最大值
            if(str[i] != str[j] || j == len - 1) {
                if(tempLen > res.length) {
                    res.char = str[i],
                    res.length = tempLen
                }

                // 当不是最后一个元素时，直接跳步到j（最后一个时，跳步会死循环）
                if(i < len - 1) {
                    i = j - 1
                }
                break;
            }
        }
    }

    return res
}

function findContinuousMaxChar2(str: string): IChar {
    let res: IChar = {
        char: '',
        length: 0
    }
    
    let len = str.length
    if(len == 0) return res

    let tempLen = 0  // 连续字符临时长度
    let i = 0, j = 0;
    for(; i < len; i++) {
        if(str[i] == str[j]) {
            tempLen++
        } 

        // 不相等 或者 i 到了字符串的末尾
        if(str[i] != str[j] || i == len - 1) {
            if(tempLen > res.length) {
                res.char = str[i],
                res.length = tempLen
            }
            tempLen = 0

            if(i < len - 1) {
                j = i
                i--
            }
        }
    }

    return res
}

// let str = 'aabccddd'
// console.log(findContinuousMaxChar2(str))

function quickSort(arr: number[]): number[] {
    const len = arr.length
    if(len == 0) return arr

    const base = arr[0]  // 基准
    const left: number[] = []
    const right: number[] = []

    for(let i = 1; i < len; i++) {
        if(arr[i] < base) {
            left.push(arr[i])
        }else {
            right.push(arr[i])
        }
    }

    return quickSort(left).concat(
        [base],
        quickSort(right)
    )
}

// console.log(quickSort([6,7,3,2,1,4,5,8]))


function thousandsFormat1(num: number): string {
    num = Math.floor(num)  // 只考虑整数

    let str = num.toString()
    let len = str.length
    if(len <= 3) return str

    let res = ''
    for(let i = len - 1; i >= 0; i--) {
        let j = len - i  // 当前元素从右向左的下标 + 1
        if(j % 3 != 0 || i == 0) {
            res = str[i] + res
        }else {
            res = ',' + str[i] + res
        }
    }

    return res
}

function thousandsFormat2(num: number): string {
    num = Math.floor(num)  // 只考虑整数

    let str = num.toString()
    let len = str.length
    if(len <= 3) return str

    let arr = str.split('').reverse()  // 将数组翻转
    return arr.reduce((prev, val, index) => {
        if (index % 3 == 0 && prev) {
            return val + ',' + prev
        } else {
            return val + prev
        }
    }, '')
}
// 623834302
// let num = 203438326 // 203,438,326
// console.log(thousandsFormat2(num))


function switchLetterCase1(str: string): string {
    let res = ''
    const length = str.length
    if (length == 0) return res

    const reg1 = /[a-z]/
    const reg2 = /[A-Z]/
    for (let i = 0; i < length; i++) {
        const c = str[i]
        if (reg1.test(c)) {
            res += c.toUpperCase()
        } else if (reg2.test(c)) {
            res += c.toLowerCase()
        } else {
            res += c
        }
    }

    return res
}

/**
 * 切换字母大小写（ASCII 编码）
 * @param s str
 */
function switchLetterCase2(str: string): string {
    let res = ''
    const length = str.length
    if (length === 0) return res

    for (let i = 0; i < length; i++) {
        const c = str[i]
        const code = c.charCodeAt(0)

        if (code >= 65 && code <= 90) {
            res += c.toLowerCase()
        } else if (code >= 97 && code <= 122) {
            res += c.toUpperCase()
        } else {
            res += c
        }
    }

    return res
}

let arr = [
    { id: 1, pid: 0, name: '北京市'},
    { id: 2, pid: 0, name: '四川省'},
    { id: 3, pid: 1, name: '朝阳区'},
    { id: 4, pid: 1, name: '昌平区'},
    { id: 5, pid: 1, name: '海淀区'},
    { id: 6, pid: 2, name: '成都市'},
    { id: 7, pid: 2, name: '达州市'},
    { id: 8, pid: 6, name: '成华区'},
    { id: 9, pid: 6, name: '锦江区'},
    { id: 10, pid: 7, name: '万源市'}
]

interface IAdArr {
    id: number,
    pid: number,
    name: string
}
interface IAdTree {
    id: number,
    name: string,
    children?: IAdTree[]
}

// 递归
function arrayToTree(arr: IAdArr[], pid: number = 0): IAdTree[] {
    if(arr.length == 0) return []

    return arr.filter((item) => {
        return item.pid == pid
    }).map(item => {
        return {
            id: item.id,
            name: item.name,
            children: arrayToTree(arr, item.id)
        }
    })
}
// 非递归
function arrayToTree1(arr: IAdArr[]): IAdTree[] {
    let res = []
    if(arr.length == 0) return []

    // 映射map
    let map = {}
    arr.forEach(item => map[item.id] = item)

    arr.forEach(item => {
        let parent = map[item.pid]
        if(parent) {
            (parent.children || (parent.children = [])).push(item)
        }else {
            res.push(item)
        }
        delete item.pid
    })

    return res
}


function treeToArray(tree) {
    let res = []
    
    while(tree.length > 0) {
        let item = tree.pop()
        if(item.children && item.children.length > 0) {
            let nodes = item.children.map(e => {
                return {
                    ...e,
                    pid: item.id
                }
            })
            tree.push(...nodes)
        }
        res.push({
            id: item.id,
            name: item.name,
            pid: item.pid
        })
    }


    return res
}

let myTree = arrayToTree1(arr)
console.log(myTree)
console.log(treeToArray(myTree))