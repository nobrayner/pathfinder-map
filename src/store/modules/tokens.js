// Testing data
let TEST_MODE = true

let testTeams = [
  {
    id: 0,
    color: 'hsl(0, 80%, 60%)',
    name: 'Red Team',
    waypoints: [
      {
        location: [-32.3431500500500, 150.260000000000000],
        time: '2018-11-04 14:03:00'
      }
    ]
  },
  {
    id: 1,
    color: 'hsl(120, 40%, 70%)',
    name: 'Green Team',
    waypoints: [
      {
        location: [-32.3531500500500, 150.260000000000000],
        time: '2018-11-04 11:03:00'
      }
    ]
  },
  {
    id: 2,
    color: 'hsl(240, 70%, 70%)',
    name: 'Blue Team',
    waypoints: [
      {
        location: [-32.3531500500500, 150.270000000000000],
        time: '2018-11-04 13:03:00'
      }
    ]
  }
]

const state = {
  teams: TEST_MODE === true ? testTeams : []
}

const getters = {
  tokenTeams: (state) => {
    return state.teams
  }
}

const actions = {

}

const mutations = {

}

export default {
  namespaced: false,
  state,
  getters,
  actions,
  mutations
}
