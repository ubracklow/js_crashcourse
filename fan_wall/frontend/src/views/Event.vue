<script>
// @ is an alias to /src
import EventCard from '@/components/event-card.vue'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'event',
  components: {
    EventCard
  },
  computed: {
    ...mapState(['event']),
  },
  methods: {
    ...mapActions(['fetchEvent']),
  },
  created() {
    this.fetchEvent(this.$route.params.id)
  }}
</script>

<template lang="pug">
  main
      section
        event-card(:event="event")
</template>

<style scoped>
  section {
    padding: 40px 0;
    min-height: 100vh;
  }
</style>