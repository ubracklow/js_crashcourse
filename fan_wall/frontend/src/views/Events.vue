<script>
// @ is an alias to /src
import EventCardList from '@/components/event-card-list.vue'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'events',
  components: {
    EventCardList
  },
  computed: {
    ...mapState(['events']),
  },
  methods: {
    ...mapActions(['fetchEvents']),
  },
  mounted() {
    this.fetchEvents()
  }}
</script>

<template lang="pug">
  main
      section
        h1 Here you find all events posted on fan wall
        event-card-list(v-for="event in events", :event="event")
</template>

<style scoped>
  section {
    padding: 40px 0;
    min-height: 100vh;
  }
</style>