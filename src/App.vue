<template lang="pug">
#app
    button#settings-button
        font-awesome-icon(icon="cog")
    budget-bar(title="Monthly Budget" :maxValue=2000)
    budget-bar(title="Daily Budget" :maxValue=100)
    recent-transactions( @add="addTransactionPressed")
    button#transaction-button(@click.self.stop="addTransactionPressed") +
    transition(name="fade")
      transaction-add(v-if="addTransaction === true" @close="closeAddTransaction")
</template>

<script>
import BudgetBar from "./components/BudgetBar";
import RecentTransactions from "./components/RecentTransactions";
import TransactionAdd from "./components/TransactionAdd";

export default {
  name: "App",
  components: { BudgetBar, RecentTransactions, TransactionAdd },
  data() {
    return {
      addTransaction: false,
    };
  },
  methods: {
    addTransactionPressed() {
      this.addTransaction = true;
    },
    closeAddTransaction() {
      this.addTransaction = false;
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

@import "./assets/styles/_constants.scss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: transparent;
}

html,
body {
  width: 100vw;
  background-color: $color-purple;
  overflow-x: hidden;
  overflow-y: hidden;
}

#settings-button {
  background: none;
  font-size: 30px;
  height: 30px;
  right: 10px;
  position: absolute;
  top: 10px;
  width: 30px;
}

button {
  border: none;
  color: white;
  font-size: 3rem;
  font-weight: bold;
  height: 60px;
  outline: none;
  width: 60px;
  transition: all 0.2s ease-in-out;

  &:hover {
    filter: brightness(0.95);
  }

  &:active {
    filter: brightness(0.8);
    transform: scale(0.95);
  }
}

#transaction-button {
  background: linear-gradient(180deg, $color-yellow 0%, $color-red 100%);
  border-radius: 60px;
  bottom: 3%;
  filter: drop-shadow(0px 2px 2px $color-purple-light);
  position: absolute;
  right: -5%;
  transform: translate(-50%, -50%);
  z-index: 11;

  &:active {
    transform: translate(-50%, -50%) scale(0.9);
  }
}
</style>
