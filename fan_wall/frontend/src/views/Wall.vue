<script>
// @ is an alias to /src
import WallCard from '@/components/wall-card.vue'
import EventCardList from '@/components/event-card-list.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'wall',
  components: {
    'wall-card': WallCard,
    'event-card-list': EventCardList

  },
  computed: {
    ...mapState(['wall']),
  },
  methods: {
    ...mapActions(['fetchWall']),
  },
  mounted() {
    this.fetchWall(this.$route.params.id)
  }}
</script>

<template lang="pug">
  main
        section
            wall-card(:wall="wall")            
        #event-section    
            h3(v-if="wall.events.length") 
                h3 Events on this wall
                event-card-list(v-for="event in wall.events", :event="event")
            h3(v-else) No events posted to this wall yet 
</template>

<style scoped>
  section {
    padding: 40px 0;
  }
  #event-section {
    color: #eeee14; 
    min-height: 100vh;
  }
</style>