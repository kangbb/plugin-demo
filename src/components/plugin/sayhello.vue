<!-- sayhello.vue组件 -->
<template>
    <div class="Hello-box" v-show="show">
      <p>Hello<p>
      <h1>{{text}}</h1>
    </div>
</template>

<script>
export default {
  props: {
    show: Boolean,
    text: {
      type: String,
      default: 'Wait a time...'
    }
  }
}
</script>

<style>
p{
  font-size: 28px;
  text-align: center;
}
h1 {
  text-align: center;
}
</style>
