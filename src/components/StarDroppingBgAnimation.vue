<script setup lang="ts">

</script>

<template>
  <div class="lines">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>
</template>

<style scoped>
/*Background line dropping animation*/
.lines {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  width: 90vw;
  height: 100%;
  margin: auto;
  user-select: none;
}
.line {
  position: absolute;
  top: 0;
  left: 50%;
  overflow: hidden;
  width: 1px;
  height: 100%;
  user-select: none;
  background: rgba(255, 255, 255, 0);
}
.line::after {
  position: absolute;
  top: -50%;
  left: 0;
  display: block;
  width: 100%;
  height: 15vh;
  content: '';
  -webkit-animation: drop 7s 0s infinite;
  animation: drop 7s 0s infinite;
  -webkit-animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
  animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #0d948850 70%, #0d948890 100%);
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}
.line:nth-child(1) {
  margin-left: -25%;
}
.line:nth-child(1)::after {
  -webkit-animation-delay: 2s;
  animation-delay: 2s;
}
.line:nth-child(3) {
  margin-left: 25%;
}
.line:nth-child(3)::after {
  -webkit-animation-delay: 2.5s;
  animation-delay: 2.5s;
}
@-webkit-keyframes drop {
  0% {
    top: -10%;
  }
  100% {
    top: 110%;
  }
}
@keyframes drop {
  0% {
    top: -50%;
  }
  100% {
    top: 110%;
  }
}
</style>