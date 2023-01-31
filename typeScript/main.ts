/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2023-01-13 15:58:38
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2023-01-13 17:13:18
 * @Descripttion: 
 */
interface IPerson {
    name: string,
    age: number
}
interface IAdd {
    (a: number, b: number): number
}

function print2(p: IPerson): void {
    console.log(p.name, p.age)
}
let print1: IAdd = (x, y) => {
    return x + y
}

print2({
    name: 'Tom',
    age: 10
})

interface Cat {
    name: string;
    run(): void;
}
interface Fish {
    name: string;
    swim(): void;
}

function doSomething(animal: Cat | Fish) {
    (animal as Fish).swim()
}

function createArr<T>(value: T): Array<T> {
    return [value]
}