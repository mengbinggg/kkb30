/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-01 11:37:15
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-09-20 12:07:20
 * @Descripttion: 入口文件
 */
import { createRoot } from "react-dom/client";
import App from "./PureComponentTest";

let root = createRoot(document.getElementById("root"));
root.render(<App />);
