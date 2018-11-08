<template>
  <nav class="tokenbar">
    <div class="titlebar" >
      <span class="tokentitle always">{{ selectedToken.name }}</span>
    </div>
    <div class="tokenlist">
      <token v-for="team in teams" :key="team.id" :color="team.color" :title="team.name" @tokenclick="selectToken(team)" />
    </div>
  </nav>
</template>

<script>
import Token from './Token'

export default {
  name: 'Tokenbar',
  components: {
    Token
  },
  props: {
    teams: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      isExpanded: false,
      selectedToken: {}
    }
  },
  computed: {
    viewportClasses () {
      return {
        'active': this.isExpanded
      }
    }
  },
  methods: {
    toggleTokenbar () {
      this.isExpanded = !this.isExpanded
    },
    selectToken (token) {
      this.selectedToken = token
    }
  }
}
</script>

<style>
.icon {
  text-align: center;
  width: 64px;
  height: 64px;
}
.icon i {
  display: inline-block;
  line-height: 64px;
}

/* debug */
.square {
  width: 64px;
  height: 64px;
}
/* COLORS */
.red {
  color: hsl(0, 80%, 60%);
  background-color: hsl(0, 80%, 60%);
}
.blue {
  color: hsl(240, 70%, 70%);
  background-color: hsl(240, 70%, 70%);
}
.green {
  color: hsl(120, 40%, 70%);
  background-color: hsl(120, 40%, 70%);
}
</style>
