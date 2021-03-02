import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      memories: [
        {
          id: "b1",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Hospital_Bed_2011_CPR.JPG/640px-Hospital_Bed_2011_CPR.JPG",
          title: "Bed One",
        },
        {
          id: "b2",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Hospital_Bed_2011_CPR.JPG/640px-Hospital_Bed_2011_CPR.JPG",
          title: "Bed Two",
        },
        {
          id: "b3",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Hospital_Bed_2011_CPR.JPG/640px-Hospital_Bed_2011_CPR.JPG",
          title: "Bed Three",
        },
      ],
    };
  },
  getters: {
    memories(state) {
      return state.memories;
    },
    memory(state) {
      return (memoryId) => {
        return state.memories.find((memory) => memory.id === memoryId);
      };
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
