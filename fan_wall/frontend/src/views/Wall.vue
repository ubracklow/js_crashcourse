<script>
// @ is an alias to /src
import WallCard from '@/components/wall-card.vue'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'wall',
  components: {
    WallCard
  },
  computed: {
    ...mapState(['wall']),
  },
  methods: {
    ...mapActions(['fetchWall']),
  },
  created() {
    this.fetchWall(this.$route.params.id)
  }}
</script>

<template lang="pug">
  main
      section
        wall-card(:wall="wall")
</template>

<style scoped>
  section {
    padding: 40px 0;
    min-height: 100vh;
  }
</style>