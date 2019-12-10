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
            h2 Hey, I also went to this event! 
            attendee-element(v-for="attendee in event.otherAttendees", :attendee="attendee")
        button.attend-button(@click="attendEvent(event._id)") Add me to the list

</template>

<style scoped>
  section {
    padding: 40px 0;
  }
  #attendee-section {
    min-height: 100vh;
    color: #eeee14
  }
  .attend-button {
  background:rgba(255,255,255,0.25);
  color: #eeee14;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 8px;
  border: 1px solid #eeee14;
  cursor: pointer;
  margin-bottom: 20px;
}
.attend-button:hover {
  background-color: #eeee14;
  color: #b12183;
}
</style>