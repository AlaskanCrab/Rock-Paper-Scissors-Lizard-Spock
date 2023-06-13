<template>
  <div v-show="gameStore.popup === true" class="pop-up-background">
    <div class="rule-container">
      <div class="rule-top-side">
        <p class="rule-top-side-text">RULES</p>
        <img
          @click="gameStore.closePopup()"
          class="rule-top-side-close-btn"
          src="../assets/images/icon-close.svg"
          alt=""
        />
      </div>
      <img
        class="rules-bonus-svg"
        src="../assets/images/image-rules-bonus.svg"
        alt=""
      />
    </div>
  </div>
</template>
<script setup>
import { useGameStore } from "../store/store.js";
import { storeToRefs } from "pinia";

const gameStore = useGameStore();

const { closePopup } = storeToRefs(useGameStore);
</script>
