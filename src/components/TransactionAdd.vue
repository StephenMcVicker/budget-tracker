<template lang="pug">
  .container
    input(v-model="value" v-currency="{currency: 'EUR', locale: 'en'}")
    h4 Select Category
    .category-container
        .category
            font-awesome-icon(icon="gift")
        .category
            font-awesome-icon(icon="utensils")
        .category
            font-awesome-icon(icon="bus")
        .category
            font-awesome-icon(icon="gift")
        .category
            font-awesome-icon(icon="utensils")
        .category
            font-awesome-icon(icon="bus")
    h4 Select Date/Time
    button#transaction-button(@click.self.stop="addTransactionPressed") +
    button(@click="close") X
</template>

<script>
export default {
  data() {
    return {
      value: 0,
    };
  },
  methods: {
    close() {
      console.log("Trying to close popup...");
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/_constants.scss";

.container {
  width: 100vw;
  height: 100vh;
  background-color: $color-purple-dark;
  position: absolute;
  top: 0;
  left: 0;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease-in-out;

  z-index: 100;
}

input {
  background: $color-purple;
  border: none;
  outline: none;
  border-radius: 50vh;
  height: 84px;
  margin: 1rem 0;
  width: 340px;

  padding: 0 2rem;
  font-weight: bold;
  font-size: 44px;
  line-height: 56px;
  color: $color-green;

  text-align: right;
}

h4 {
  color: $color-purple-light;
  margin: 1rem 0;
}

svg {
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

.category-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  width: 100%;

  .category {
    background: white;
    color: $color-purple-light;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    margin: 1rem;
    width: 90px;
    height: 90px;
  }
}

#transaction-button {
  background: linear-gradient(180deg, $color-yellow 0%, $color-red 100%);
  border-radius: 60px;
  filter: drop-shadow(0px 2px 2px $color-purple-light);
  left: 50%;
  position: absolute;
  bottom: 0.5rem;
  transform: translate(-50%, -50%);
  z-index: 101;

  &:active {
    transform: translate(-50%, -50%) scale(0.9);
  }
}

/* Animation */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
