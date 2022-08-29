<template>
  <ui-toasts :toasts="toasts"></ui-toasts>
</template>

<script>
import UiToasts from './UiToasts.vue';

const toastTypes = {
  'success' : {
    icon: 'check-circle',
    class: 'toast_success'
  },
  'error' : {
    icon: 'alert-circle',
    class: 'toast_error'
  },
}

export default {
  name: 'TheToaster',
  components: { UiToasts },
  data(){
    return {
      toasts: new Set()
    }
  },

  methods: {
    success(msg) {
      this.showToast(msg, 'success')
    },
    error(msg) {
      this.showToast(msg, 'error')
    },
    showToast(msg, type, delay = 5000){
      const toast = {
        message: msg,
        class: toastTypes[type].class,
        icon: toastTypes[type].icon
      };
      this.toasts.add(toast);
      setTimeout((toast) => {
        this.toasts.delete(toast)
      }, delay, toast)
    },
  },
};
</script>

<style></style>
