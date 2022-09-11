/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-01 11:37:15
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-09-11 15:19:37
 * @Descripttion: 入口文件
 */
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App";
import store from "./redux/store";

let root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

store.subscribe(() => {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
})