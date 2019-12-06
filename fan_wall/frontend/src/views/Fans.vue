<script>
// @ is an alias to /src
import FanCard from '@/components/fan-card.vue'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'fans',
  components: {
    FanCard
  },
  computed: {
    ...mapState(['fans']),
  },
  methods: {
    ...mapActions(['fetchFans']),
  },
  mounted() {
    this.fetchFans()
  }}
</script>

<template lang="pug">
  main
      section
        h1 Meet the Fans
        fan-card(v-for="fan in fans", :fan="fan")
</template>

<style scoped>
  section {
    padding: 40px 0;
    min-height: 100vh;
  }
</style>