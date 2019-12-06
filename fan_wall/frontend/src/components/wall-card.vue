<script>
export default {
  name: 'WallCard',
  props: ['wall']
}
</script>

<template lang="pug">
  article.card 
    h2 {{ wall.name }} 
    p by {{ wall.fan.name }}
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