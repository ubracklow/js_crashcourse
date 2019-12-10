<script>
export default {
  name: 'EventCard',
  props: ['event']
}
</script>

<template lang="pug">
  article.card 
    img(:src="`http://picsum.photos/300/200?random=${event._id}`")
    h2 {{ event.name }} 
    p {{ event.fan.name }} went to see the event on 
    p {{ event.date }} 
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