<script>
// @ is an alias to /src
import EventCard from '@/components/event-card.vue'
import AttendeeElement from '@/components/attendee-element.vue'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'event',
  components: {
    'event-card': EventCard,
    'attendee-element': AttendeeElement
  },
  computed: {
    ...mapState(['event']),
  },
  methods: {
    ...mapActions(['fetchEvent', 'attendEvent']),
  },
  mounted() {
    this.fetchEvent(this.$route.params.id)
  }}
</script>

<template lang="pug">
  main
      section
        event-card(:event="event")
      #attendee-section  
        h3(v-if="event.otherAttendees.length") 
            h3 other Attendees
            attendee-element(v-for="attendee in event.otherAttendees", :attendee="attendee")
        button.attend-button(@click="attendEvent(event._id)") I also went to this event

</template>

<style scoped>
  section {
    padding: 40px 0;
  }
  #attendee-section {
    min-height: 100vh;
    color: #eeee14
  }
  .attend-button:hover {
  background-color: darkcyan;
  color: white;
}
</style>