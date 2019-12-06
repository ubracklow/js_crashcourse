<script>
// @ is an alias to /src
import FanCard from '@/components/fan-card.vue'
import EventCard from '@/components/event-card.vue'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'fan',
  components: {
    'fan-card': FanCard,
    'event-card': EventCard
  },
  computed: {
    ...mapState(['fan', 'fanEvents']),
  },
  methods: {
    ...mapActions(['fetchFan', 'fetchEventsForFan']),
  },
  mounted() {
    this.fetchFan(this.$route.params.id),
    this.fetchEventsForFan(this.$route.params.id)
  }}
</script>

<template lang="pug">
  main
      section
        p Meet the fan
        fan-card(:fan="fan")
      section
        p This fan has the following events:
        event-card(v-for="event in fanEvents", :event="event")

</template>

<style scoped>
  section {
    padding: 40px 0;
    min-height: 100vh;
  }
</style>