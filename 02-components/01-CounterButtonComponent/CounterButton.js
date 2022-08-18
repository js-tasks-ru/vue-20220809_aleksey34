import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',

  props: {
    count: {
      default: 0
    }
  },

  methods: {
    buttonClick(){
      this.$emit('update:count', this.count + 1)
    }
  },

  template: `<button type="button" @click="buttonClick">{{ count }}</button>`,
});
