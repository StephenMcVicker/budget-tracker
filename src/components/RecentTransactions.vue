<template lang="pug">
  .recent-transactions(
        @click.stop="expanded = !expanded"
        :class="[expanded ? 'expanded' : '']")
        h1 Recent Transactions
        .transaction(@click="viewTransactionWithID")
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
export default {
  name: "RecentTransactions",
  data() {
    return {
      expanded: false,
    };
  },
  methods: {
    addTransactionPressed: function () {
      this.$emit("add");
    },
    viewTransactionWithID() {
      console.log("Tapped on a transaction");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/_constants.scss";

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
  z-index: 10;

  > h1 {
    font-size: 1.6rem;
    font-weight: bold;
  }

  .transaction {
    align-items: center;
    display: flex;
    justify-content: space-between;
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
      margin: 0 auto 0 1rem;

      h4 {
        color: $color-purple-dark;
        font-size: 18px;
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

  #transaction-button {
    opacity: 0;
    transform: translate(-50%, -100%);
    transition: all 1s;
  }
}
</style>
