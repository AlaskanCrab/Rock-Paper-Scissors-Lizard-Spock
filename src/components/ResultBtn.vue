<template>
  <div class="result-area">
    <div class="game-result">{{ gameStore.result }}</div>
    <RouterLink to="/">
      <button class="play-again-btn">PLAY AGAIN</button>
    </RouterLink>
  </div>
</template>
<script setup>
import { useGameStore } from "../store/store.js";
import { storeToRefs } from "pinia";

const gameStore = useGameStore();

const { playerSelect, computerSelect, result } = storeToRefs(useGameStore);

const gameResult = () => {
  if (gameStore.playerSelect === gameStore.computerSelect) {
    gameStore.result = "Draw";
    console.log(gameStore.result);
  } else if (
    (gameStore.playerSelect === "paper" &&
      gameStore.computerSelect === "rock") ||
    (gameStore.playerSelect === "paper" &&
      gameStore.computerSelect === "spock") ||
    (gameStore.playerSelect === "rock" &&
      gameStore.computerSelect === "scissors") ||
    (gameStore.playerSelect === "rock" &&
      gameStore.computerSelect === "lizard") ||
    (gameStore.playerSelect === "scissors" &&
      gameStore.computerSelect === "paper") ||
    (gameStore.playerSelect === "scissors" &&
      gameStore.computerSelect === "lizard") ||
    (gameStore.playerSelect === "spock" &&
      gameStore.computerSelect === "scissors") ||
    (gameStore.playerSelect === "spock" &&
      gameStore.computerSelect === "rock") ||
    (gameStore.playerSelect === "lizard" &&
      gameStore.computerSelect === "paper") ||
    (gameStore.playerSelect === "lizard" &&
      gameStore.computerSelect === "spock")
  ) {
    gameStore.result = "YOU WIN!";
    console.log(gameStore.result);
    gameStore.score += 1;
  } else if (
    (gameStore.playerSelect === "paper" &&
      gameStore.computerSelect === "scissors") ||
    (gameStore.playerSelect === "paper" &&
      gameStore.computerSelect === "lizard") ||
    (gameStore.playerSelect === "rock" &&
      gameStore.computerSelect === "paper") ||
    (gameStore.playerSelect === "rock" &&
      gameStore.computerSelect === "spock") ||
    (gameStore.playerSelect === "scissors" &&
      gameStore.computerSelect === "rock") ||
    (gameStore.playerSelect === "scissors" &&
      gameStore.computerSelect === "spock") ||
    (gameStore.playerSelect === "spock" &&
      gameStore.computerSelect === "lizard") ||
    (gameStore.playerSelect === "spock" &&
      gameStore.computerSelect === "paper") ||
    (gameStore.playerSelect === "lizard" &&
      gameStore.computerSelect === "rock") ||
    (gameStore.playerSelect === "lizard" &&
      gameStore.computerSelect === "scissors")
  ) {
    gameStore.result = "YOU LOSE!";
    console.log(gameStore.result);
  }
};

gameResult();
</script>
