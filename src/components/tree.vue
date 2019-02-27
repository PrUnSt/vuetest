<template>
 <div class="page">

<label>{{trees}}</label>
 </div>
</template>

<script>
export default {
    name:'tree',
 data() {
    return {
        trees:"ssss"
    }
 },
//  components: {
//     tree,
//  }
}
</script>

<style >
@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
}
.page{
      animation-timing-function: ease;
  animation-duration: 800ms;
  animation-fill-mode: both;
  animation-name: fadeInLeft;
}
</style>
