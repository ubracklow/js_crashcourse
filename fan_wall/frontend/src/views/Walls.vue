<script>
// @ is an alias to /src
import WallCard from '@/components/wall-card.vue'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'walls',
  components: {
    WallCard
  },
  computed: {
    ...mapState(['walls']),
  },
  methods: {
    ...mapActions(['fetchWalls']),
  },
  created() {
    this.fetchWalls()
  }}
</script>

<template lang="pug">
  main
      h1 Here you find all walls posted on fan wall
      wall-card(v-for="wall in walls", :wall="wall")
</template>

<style scoped>
  section {
    padding: 40px 0;
    min-height: 100vh;
  }
</style>