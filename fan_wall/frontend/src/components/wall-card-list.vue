<script>
export default {
  name: 'WallCardList',
  props: ['wall']
}
</script>

<template lang="pug">
  article.card 
    h2 {{ wall.name }} 
    h2 {{ wall._id }} 
    p created by {{ wall.fan.name }}
    a(:href="'/wall/' + wall._id") Go to Wall
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