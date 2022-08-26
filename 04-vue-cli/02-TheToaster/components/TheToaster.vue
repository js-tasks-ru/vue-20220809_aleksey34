<template>
  <div class="toasts">
    <div v-for="toast in toasts" class="toast" :class="toast.class">
      <ui-toast :toast="toast" />
    </div>
  </div>
</template>

<script>
import UiToast from './UiToast.vue';

const toastTypes = {
  'sucsess' : {
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
  components: { UiToast },
  data(){
    return {
      toasts: new Set()
    }
  },

  methods:{
    success(msg){
      this.showToast(msg, 'sucsess')
    },
    error(msg){
      this.showToast(msg, 'error')
    },
    showToast(msg, type, delay = 5000){
      var toast = {
        message: msg,
        class: toastTypes[type].class,
        icon: toastTypes[type].icon
      };
      this.toasts.add(toast);
      setTimeout((toast) => {
        this.toasts.delete(toast)
      }, delay, toast)
    }
  }
};
</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}

.toast {
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 18px;
  line-height: 28px;
  width: auto;
}

.toast + .toast {
  margin-top: 20px;
}

.toast.toast_success {
  color: var(--green);
}

.toast.toast_error {
  color: var(--red);
}
</style>
