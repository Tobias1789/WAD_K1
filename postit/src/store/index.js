import { createStore } from 'vuex'

export default createStore({
  state: {
    postsList: [
      {
        id: 1,
        author: "Tobias Välja",
        date: "Oct 22, 2022",
        text: "Tartu 2022",
        image: "tartu.svg",
        likes: 0
      },
      {
        id: 2,
        author: "Mihkel Tomson",
        date: "Oct 2, 2022",
        text: "Anyone knows in which room is the lab today?",
        image: null,
        likes: 0
      },
      {
        id: 3,
        author: "Rasmus Vider",
        date: "Sep 28, 2022",
        text: "Walking home after the lecture.",
        image: "tartu.svg",
        likes: 0
      },
      {
        id: 4,
        author: "Tobias Välja",
        date: "Sep 20, 2022",
        text: "Does anyone have notes from the last HTML lecture?",
        image: null,
        likes: 0
      },
      {
        id: 5,
        author: "Mihkel Tomson",
        date: "Sep 15, 2022",
        text: "Found a great cafe near the university.",
        image: null,
        likes: 0
      },
      {
        id: 6,
        author: "Rasmus Vider",
        date: "Sep 10, 2022",
        text: "Autumn colors in Toomemägi.",
        image: "tartu.svg",
        likes: 0
      },
      {
        id: 7,
        author: "Tobias Välja",
        date: "Sep 5, 2022",
        text: "First week of the semester done!",
        image: null,
        likes: 0
      },
      {
        id: 8,
        author: "Mihkel Tomson",
        date: "Aug 30, 2022",
        text: "Looking for a team for the web project. Anyone interested?",
        image: null,
        likes: 0
      },
      {
        id: 9,
        author: "Rasmus Vider",
        date: "Aug 25, 2022",
        text: "Evening by the Emajõgi river.",
        image: "tartu.svg",
        likes: 0
      },
      {
        id: 10,
        author: "Tobias Välja",
        date: "Aug 20, 2022",
        text: "Welcome to PostIt, my first post!",
        image: null,
        likes: 0
      }
    ]
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {}
})