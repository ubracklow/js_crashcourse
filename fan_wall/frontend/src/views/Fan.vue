<script>
// @ is an alias to /src
import FanCard from '@/components/fan-card.vue'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'fan',
  components: {
    FanCard
  },
  computed: {
    ...mapState(['fan']),
  },
  methods: {
    ...mapActions(['fetchFan']),
  },
  created() {
    this.fetchFan(this.$route.params.id)
  }}
</script>

<template lang="pug">
  main
      section
        fan-card(:fan="fan")
</template>

<style scoped>
  section {
    padding: 40px 0;
    min-height: 100vh;
  }
</style>