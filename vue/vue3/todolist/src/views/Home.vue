<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">TodoList</a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/add">待办事项</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/done">已完成</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/delete">已删除</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div style="margin: 0 20px">
    <router-view></router-view>
  </div>
</template>
