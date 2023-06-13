<template>
  <button @click="gameStore.openPopup()" class="rules">RULES</button>
  <div class="attribution">
    Challenge by
    <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
      >Frontend Mentor</a
    >. Coded by
    <a href="https://github.com/AlaskanCrab" target="_blank">AlaskanCrab</a>.
  </div>
</template>
<script setup>
import { useGameStore } from "../store/store.js";
import { storeToRefs } from "pinia";

const gameStore = useGameStore();

const { popup, openPopup } = storeToRefs(useGameStore);
</script>
