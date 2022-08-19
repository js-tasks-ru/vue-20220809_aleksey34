import { defineComponent } from '../vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import { fetchMeetupById } from '../meetupService.js';
import MeetupView from '../../06-MeetupView/components/MeetupView.js'

export default defineComponent({
  name: 'PageMeetup',

  components: {
    UiAlert,
    UiContainer,
    MeetupView
  },

  data() {
    return {
      error: undefined,
      meetup: undefined
    }
  },

  props: {
    meetupId: {
      type: Number,
      required: true,
    }
  },

  watch: {
    meetupId () {
      this.getMeetup()
    }
  },

  mounted () {
    this.getMeetup()
  },

  methods: {
    async getMeetup() {
      try {
        this.error = undefined;
        this.meetup = undefined;
        var meetupResponse = await fetchMeetupById(this.meetupId);
        if (meetupResponse){
          this.meetup = meetupResponse;
        }
      } catch (error) {
        this.error = error.message;
      }
    }
  },

  template: `
    <div class="page-meetup">
      <MeetupView v-if="meetup" :meetup="meetup" />

      <UiContainer v-else-if="!error">
        <UiAlert>Загрузка...</UiAlert>
      </UiContainer>

      <UiContainer v-else="error">
        <UiAlert>{{ error }}</UiAlert>
      </UiContainer>
    </div>`,
});
