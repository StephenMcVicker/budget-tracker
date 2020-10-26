<template lang="pug">
#app
    button#settings-button
        font-awesome-icon(icon="cog")
    budget-bar
    .recent-transactions(
        @click.stop="expanded = !expanded"
        :class="[expanded ? 'expanded' : '']")
        button#transaction-button(@click.self.stop="addTransactionPressed") +
        h1 Recent Transactions
        .transaction
            font-awesome-icon(icon="gift")
            .text
                h4 Bought new phone
                p 23 Nov. 9:33pm
            p €789.99
        .transaction
            font-awesome-icon(icon="bus")
            .text
                h4 Travel to home
                p 23 Nov. 5:02pm
            p €2.99
        .transaction
            font-awesome-icon(icon="utensils")
            .text
                h4 Lunch from Tesco
                p 23 Nov. 1:23pm
            p €5.99
        .transaction
            font-awesome-icon(icon="bus")
            .text
                h4 Travel to work
                p 23 Nov. 8:08am
            p €2.99
</template>

<script>
import BudgetBar from "./components/BudgetBar";

export default {
  name: "App",
  components: { BudgetBar },
  data() {
    return {
      expanded: false,
    };
  },
  methods: {
    addTransactionPressed: function () {
      console.log("Add Transaction Pressed");
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

.recent-transactions {
  background-color: white;
  border-radius: 50px 50px 0 0;
  bottom: 0;
  color: $color-purple;
  height: 270px;
  padding: 3rem 2rem;
  position: absolute;
  transition: all 0.3s ease-in-out;
  width: 100%;
  z-index: 100;

  > h1 {
    font-size: 1.6rem;
    font-weight: bold;
  }

  > #transaction-button {
    background: linear-gradient(180deg, $color-yellow 0%, $color-red 100%);
    border-radius: 60px;
    filter: drop-shadow(0px 2px 2px $color-purple-light);
    left: 50%;
    position: absolute;
    top: 0;
    transform: translate(-50%, -50%);
    z-index: 101;

    &:active {
      transform: translate(-50%, -50%) scale(0.9);
    }
  }

  .transaction {
    align-items: center;
    display: flex;
    margin: 2rem 0;

    svg {
      width: 30px;
      height: 30px;
      color: $color-purple-light;

      &[data-icon="bus"] {
        color: $color-yellow;
      }

      &[data-icon="gift"] {
        color: $color-green;
      }

      &[data-icon="utensils"] {
        color: $color-purple-light;
      }
    }

    p {
      color: $color-red;
      font-weight: bold;
    }

    .text {
      display: flex;
      flex-direction: column;
      margin: 0px 1.8rem;
      min-width: 60%;

      h4 {
        color: $color-purple-dark;
        font-size: 20px;
        font-weight: bold;
      }

      p {
        color: $color-grey;
        font-size: 16px;
        font-weight: 400;
      }
    }
  }
}

.expanded {
  border-radius: 0px;
  height: 100%;
  overflow-y: scroll;
  width: 100%;

  > #transaction-button {
    opacity: 0;
    transition: all 0.1s;
  }
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
</style>
