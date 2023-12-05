<template>
  <nav id="complete">
    <router-link to="/home">home</router-link> |
    <router-link to="/about">about</router-link>
  </nav>

  <router-view></router-view>
</template>
<style>
#app {
  text-align: center;
  font-size: 35px;
  color: rgb(127, 138, 255);
}

#complete {
  border: 8px solid rgb(220, 144, 220);
}
</style>