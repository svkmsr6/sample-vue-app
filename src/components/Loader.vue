<template>
  <div v-if="show" class="loader-container">
    <div class="loader">
      <img src="/img/loader-icon.gif" width="25%">
      <p>{{ loaderText }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loader",
  props: {
    show: {
      type: Boolean,
      required: true,
      default: true
    },
    loaderText: {
      type: String,
      default: ""
    }
  }
};
</script>

<style>
.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background-color: #f1f2f3;
}

.loader-container > .loader {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
