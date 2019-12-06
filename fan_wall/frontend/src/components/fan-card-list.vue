<script>
export default {
  name: 'FanCardList',
  props: ['fan']
}
</script>

<template lang="pug">
  article.card 
    img(:src="`http://picsum.photos/300/200?random=${fan._id}`")
    h2 {{ fan.name }} 
    router-link(:to="{name: 'fan', params: {id: fan._id}}") Go to Fan
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
  color: #b12183;
}
</style>