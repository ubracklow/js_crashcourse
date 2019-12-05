<script>
export default {
  name: 'FanCard',
  props: ['fan', 'detail']
}
</script>

<template lang="pug">
  article.card 
    img(:src="`http://picsum.photos/300/200?random=${fan._id}`")
    h2 {{ fan.name }} 
    h2 {{ fan._id }}
    v-if {{ detail }}
      p I am here
    router-link(:to="{name: 'fan', params: {id: fan._id, detail: true}}") Go to Fan
</template>

<style scoped>
.card {
  display: inline-block;
  text-align: center;
  padding: 20px;
  border: 1px solid #ddd;
  margin: 20px;
  border-radius: 3px;
  min-width: 200px;
  background:rgba(255,255,255,0.25);
}
</style>