/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-01 11:37:15
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-10-08 11:36:58
 * @Descripttion: 入口文件
 */
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App";

let root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
