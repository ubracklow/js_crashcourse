<script>
export default {
  name: 'AttendeeElement',
  props: ['attendee']
}
</script>

<template lang="pug">
  article.card 
    p ⭐️ 
    h3 {{ attendee.name }} from {{ attendee.hometown }} 
    router-link(:to="{name: 'fan', params: {id: attendee._id}}") Go to Fan
</template>

<style scoped>
.card {
  color: #b12183;
}
</style>