<template>
  <header class="header">
    <div class="header-container">
      <img
        class="logo-rpc"
        src="../assets/images/logo-bonus.svg"
        alt="rock,paper,scissors logo text"
      />
      <div class="score-container">
        <div class="score-text">SCORE</div>
        <div class="score-live">{{ gameStore.score }}</div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useGameStore } from "../store/store.js";
import { storeToRefs } from "pinia";

const gameStore = useGameStore();

const { score } = storeToRefs(useGameStore);
</script>
