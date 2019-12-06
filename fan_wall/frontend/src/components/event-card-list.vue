<script>
export default {
  name: 'EventCardList',
  props: ['event']
}
</script>

<template lang="pug">
  article.card 
    img(:src="`http://picsum.photos/300/200?random=${event._id}`")
    h2 {{ event.name }} 
    h2 {{ event._id }} 
    a(:href="'/event/' + event._id") Go to Event
</template>

<style scoped>
.card {
  display: inline-block;
  text-align: left;
  padding: 20px;
  border: 1px solid #ddd;
  margin: 20px;
  border-radius: 3px;
  min-width: 200px;
  background:rgba(255,255,255,0.25);
  color: #b12183;
}
</style>