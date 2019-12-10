<script>
// @ is an alias to /src
import FanCard from '@/components/fan-card.vue'
import EventCardList from '@/components/event-card-list.vue'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'fan',
  components: {
    'fan-card': FanCard,
    'event-card-list': EventCardList
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
        H1 Meet the fan
        fan-card(:fan="fan")
        h3(v-if="fanEvents.length") {{ fan.name }} posted these events
            p
            event-card-list(v-for="event in fanEvents", :event="event")
        h3(v-else) {{ fan.name }} has not yet posted events      
</template>

<style scoped>

  section {
    color: #eeee14; 
    min-height: 100vh;
  }
  event-section {
    padding: 40px 0;
    min-height: 100vh;
  }

</style>