<template>
  <div class="token" @click="tokenClick">
    <div class="icon">
      <i class="fas fa-flag fa-2x" :style="{color: color}"></i>
    </div>
    <span class="tokentitle">{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: 'Token',
  props: {
    color: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      isHovering: false
    }
  },
  methods: {
    tokenClick () {
      this.$emit('tokenclick')
    }
  }
}
</script>

<style>

</style>
