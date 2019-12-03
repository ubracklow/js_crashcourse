<script>
// @ is an alias to /src
import EventCard from '@/components/event-card.vue'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'events',
  components: {
    EventCard
  },
  computed: {
    ...mapState(['events']),
  },
  methods: {
    ...mapActions(['fetchEvents']),
  },
  created() {
    this.fetchEvents()
  }}
</script>

<template lang="pug">
  main
    section 
      h1 Here you find all events posted on fan wall
      event-card(v-for="event in events", :event="event")
</template>

<style scoped>
  section {
    padding: 40px 0;
    min-height: 100vh;
  }
</style>