import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => {
    return {
      isAuthenticated: false,
    };
  },
  actions: {
    logIn() {
      this.isAuthenticated = true;
    },
    logOut() {
      this.isAuthenticated = false;
    },
  },
});
