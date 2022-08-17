import {
  createApp,
  defineComponent
} from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

const App = defineComponent({
  data() {
    return {
      meetupId: null,
      title: ""
    }
  },
  watch: {
    async meetupId(newId, oldId){
      var meetupResponse = await fetchMeetupById(newId);
      if (meetupResponse){
        this.title = meetupResponse.title;
      }
    }
  }

})

const app = createApp(App).mount('#app')
