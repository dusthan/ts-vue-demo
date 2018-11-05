<template>
  <div>
    <div>欢迎您[<span class="visitor">{{ marks }}</span>]来到Typescript的世界!!!</div>
    <button @click="changed">change</button>
  </div>
</template>

<script lang="ts" src="./hello.ts"></script>

<style>
.visitor {
  margin: 1em;
  color: blue;
  font-size: 15;
}
</style>