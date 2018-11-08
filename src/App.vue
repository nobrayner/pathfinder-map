<template>
  <div id="app">
    <router-view :class="pageClass" />
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    pageClass () {
      return this.$route.name + '-page'
    }
  }
}
</script>

<style>
</style>
