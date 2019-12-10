<script>
export default {
  name: 'AttendeeElement',
  props: ['attendee']
}
</script>

<template lang="pug">
  article.card 
    h2 {{ attendee.name }} from {{ attendee.hometown }} ⭐️
</template>

<style scoped>
.card {
  color: #b12183;
}
</style>