<template>
  <main>
    <div class="choosing-container">
      <img
        class="pentagon"
        src="../assets/images/bg-pentagon.svg"
        alt="pentagon"
      />
      <div class="pentagon-top">
        <RouterLink to="/fight">
          <div @click="gameStore.playerChooseScissors" class="scissors-btn btn">
            <img
              class="scissors-circle circle"
              src="../assets/images/scissors-button.svg"
              alt="scissors button"
            />
            <img
              class="scissors-icon icon"
              src="../assets/images/icon-scissors.svg"
              alt="icon scissors"
            />
          </div>
        </RouterLink>
      </div>
      <div class="pentagon-middle">
        <RouterLink to="/fight">
          <div @click="gameStore.playerChooseSpock" class="spock-btn btn">
            <img
              class="spock-circle circle"
              src="../assets/images/spock-button.svg"
              alt="spock button"
            />
            <img
              class="spock-icon icon"
              src="../assets/images/icon-spock.svg"
              alt="icon spock"
            />
          </div>
        </RouterLink>
        <RouterLink to="/fight">
          <div @click="gameStore.playerChoosePaper" class="paper-btn btn">
            <img
              class="paper-circle circle"
              src="../assets/images/paper-button.svg"
              alt="paper button"
            />
            <img
              class="paper-icon icon"
              src="../assets/images/icon-paper.svg"
              alt="icon paper"
            />
          </div>
        </RouterLink>
      </div>
      <div class="pentagon-bottom">
        <RouterLink to="/fight">
          <div @click="gameStore.playerChooseLizard" class="lizard-btn btn">
            <img
              class="lizard-circle circle"
              src="../assets/images/lizard-button.svg"
              alt="lizard button"
            />
            <img
              class="lizard-icon icon"
              src="../assets/images/icon-lizard.svg"
              alt="icon lizard"
            />
          </div>
        </RouterLink>
        <RouterLink to="/fight">
          <div @click="gameStore.playerChooseRock" class="rock-btn btn">
            <img
              class="rock-circle circle"
              src="../assets/images/rock-button.svg"
              alt="rock button"
            />
            <img
              class="rock-icon icon"
              src="../assets/images/icon-rock.svg"
              alt="icon rock"
            />
          </div>
        </RouterLink>
      </div>
      <!-- <RouterLink to="/fight">
            <div @click="gameStore.playerChoosePaper" class="paper-btn btn">
              <img
                class="paper-circle circle"
                src="../assets/images/paper-button.svg"
                alt="paper button"
              />
              <img
                class="paper-icon icon"
                src="../assets/images/icon-paper.svg"
                alt="icon paper"
              />
            </div>
          </RouterLink> -->
    </div>
  </main>
</template>
<script setup>
import { useGameStore } from "../store/store.js";
import { storeToRefs } from "pinia";

const gameStore = useGameStore();

const {
  playerChoosePaper,
  playerChooseRock,
  playerChooseScissors,
  playerChooseSpoke,
  playerChooseLizard,
} = storeToRefs(useGameStore);
</script>
