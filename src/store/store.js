import { createPinia } from "pinia";
export default createPinia();

import { defineStore } from "pinia";

export const useGameStore = defineStore("game", {
  state: () => ({
    popup: false,
    chooseNumber: Number,
    playerSelect: "",
    computerSelect: "",
    computerChoices: ["paper", "rock", "scissors", "spock", "lizard"],
    result: "",
    score: 0,
  }),
  actions: {
    playerChoosePaper() {
      this.playerSelect = "paper";
      this.randomNumberGenerator();
    },
    playerChooseRock() {
      this.playerSelect = "rock";
      this.randomNumberGenerator();
    },
    playerChooseScissors() {
      this.playerSelect = "scissors";
      this.randomNumberGenerator();
    },
    playerChooseSpock() {
      this.playerSelect = "spock";
      this.randomNumberGenerator();
    },
    playerChooseLizard() {
      this.playerSelect = "lizard";
      this.randomNumberGenerator();
    },

    openPopup() {
      this.popup = true;
    },

    closePopup() {
      this.popup = false;
    },
    randomNumberGenerator() {
      this.chooseNumber = Math.floor(Math.random() * 5);
    },
  },
});
