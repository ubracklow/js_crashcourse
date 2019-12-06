<script>
// @ is an alias to /src
import WallCardList from '@/components/wall-card-list.vue'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'walls',
  components: {
    WallCardList
  },
  computed: {
    ...mapState(['walls']),
  },
  methods: {
    ...mapActions(['fetchWalls']),
  },
  mounted() {
    this.fetchWalls()
  }}
</script>

<template lang="pug">
  main
      section
        h1 Here you find all walls posted on fan wall
        wall-card-list(v-for="wall in walls", :wall="wall")
</template>

<style scoped>
  section {
    padding: 40px 0;
    min-height: 100vh;
  }
</style>