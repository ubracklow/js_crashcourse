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
      section
        p {{ fan.name }} posted these events
        event-card-list(v-for="event in fanEvents", :event="event")



</template>

<style scoped>
  section {
    padding: 40px 0;
    min-height: 100vh;
    color: #eeee14
  }

</style>