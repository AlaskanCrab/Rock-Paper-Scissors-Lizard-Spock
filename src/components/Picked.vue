<template>
  <div class="picked-area-container">
    <div class="adjustment-container">
      <div class="player-area area">
        <div class="you-picked picked">YOU PICKED</div>
        <div
          v-show="gameStore.playerSelect === 'scissors'"
          class="scissors-btn fight-btn"
        >
          <img
            class="scissors-circle fight-circle"
            src="../assets/images/scissors-button.svg"
            alt="scissors button"
          />
          <img
            class="scissors-icon fight-icon"
            src="../assets/images/icon-scissors.svg"
            alt="scissors paper"
          />
        </div>
        <div
          v-show="gameStore.playerSelect === 'rock'"
          class="rock-btn fight-btn"
        >
          <img
            class="rock-circle fight-circle"
            src="../assets/images/rock-button.svg"
            alt="rock button"
          />
          <img
            class="rock-icon fight-icon"
            src="../assets/images/icon-rock.svg"
            alt="icon rock"
          />
        </div>
        <div
          v-show="gameStore.playerSelect === 'paper'"
          class="paper-btn fight-btn"
        >
          <img
            class="paper-circle fight-circle"
            src="../assets/images/paper-button.svg"
            alt="paper button"
          />
          <img
            class="paper-icon fight-icon"
            src="../assets/images/icon-paper.svg"
            alt="icon paper"
          />
        </div>
        <div
          v-show="gameStore.playerSelect === 'spock'"
          class="spock-btn fight-btn"
        >
          <img
            class="spock-circle fight-circle"
            src="../assets/images/spock-button.svg"
            alt="spock button"
          />
          <img
            class="spock-icon fight-icon"
            src="../assets/images/icon-spock.svg"
            alt="icon spock"
          />
        </div>
        <div
          v-show="gameStore.playerSelect === 'lizard'"
          class="lizard-btn fight-btn"
        >
          <img
            class="lizard-circle fight-circle"
            src="../assets/images/lizard-button.svg"
            alt="lizard button"
          />
          <img
            class="lizard-icon fight-icon"
            src="../assets/images/icon-lizard.svg"
            alt="icon lizard"
          />
        </div>
      </div>
      <ResultBtn></ResultBtn>
      <div class="computer-area area">
        <div class="computer-picked picked">THE HOUSE PICKED</div>
        <div class="computer-select">
          <div v-show="computerSelectNow === 'rock'" class="rock-btn fight-btn">
            <img
              class="rock-circle fight-circle"
              src="../assets/images/rock-button.svg"
              alt="rock button"
            />
            <img
              class="rock-icon fight-icon"
              src="../assets/images/icon-rock.svg"
              alt="icon rock"
            />
          </div>
          <div
            v-show="computerSelectNow === 'paper'"
            class="paper-btn fight-btn"
          >
            <img
              class="paper-circle fight-circle"
              src="../assets/images/paper-button.svg"
              alt="paper button"
            />
            <img
              class="paper-icon fight-icon"
              src="../assets/images/icon-paper.svg"
              alt="icon paper"
            />
          </div>
          <div
            v-show="computerSelectNow === 'scissors'"
            class="scissors-btn fight-btn"
          >
            <img
              class="scissors-circle fight-circle"
              src="../assets/images/scissors-button.svg"
              alt="scissors button"
            />
            <img
              class="scissors-icon fight-icon"
              src="../assets/images/icon-scissors.svg"
              alt="icon scissors"
            />
          </div>
          <div
            v-show="computerSelectNow === 'lizard'"
            class="lizard-btn fight-btn"
          >
            <img
              class="lizard-circle fight-circle"
              src="../assets/images/lizard-button.svg"
              alt="lizard button"
            />
            <img
              class="lizard-icon fight-icon"
              src="../assets/images/icon-lizard.svg"
              alt="icon lizard"
            />
          </div>
          <div
            v-show="computerSelectNow === 'spock'"
            class="spock-btn fight-btn"
          >
            <img
              class="spock-circle fight-circle"
              src="../assets/images/spock-button.svg"
              alt="spock button"
            />
            <img
              class="spock-icon fight-icon"
              src="../assets/images/icon-spock.svg"
              alt="icon spock"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useGameStore } from "../store/store.js";
import { storeToRefs } from "pinia";
import ResultBtn from "./ResultBtn.vue";

const gameStore = useGameStore();

const {
  playerSelect,
  computerChoices,
  chooseNumber,
  computerChoose,
  computerSelect,
} = storeToRefs(useGameStore);

const computerSelectNow = gameStore.computerChoices[gameStore.chooseNumber];

gameStore.computerSelect = computerSelectNow;
</script>
