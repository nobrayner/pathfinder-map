<template>
  <button class="new-entry-button" @click="addNewEntry">
    <span class="fa-stack">
      <i class="fas fa-plus fa-stack-2x" style="color: white;"></i>
      <i class="fas fa-plus-circle fa-2x fa-stack-1x" style="color: hsl(180, 30%, 70%)"></i>
    </span>
  </button>
</template>

<script>
export default {
  name: 'NewEntryButton',
  methods: {
    addNewEntry () {
      // Do something here
      console.log('Add new entry not implemented')
    }
  }
}
</script>

<style>
button.new-entry-button {
  background-color: transparent;
  border: none;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1000;
  padding: 2px;
  margin: 0;
}
.new-entry-button:hover {
  cursor: pointer;
}
.new-entry-button span.fa-stack {
  font-size: 30px;
}
</style>
