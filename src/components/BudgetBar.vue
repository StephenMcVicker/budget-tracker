<template lang="pug">
  .budget   
      .text
        p {{title}}
        p {{minValueDisplay}} / {{maxValueDisplay}} 
      .progressbar
          .content(:style="{ width: widthOfContentBar}")   
</template>

<script>
export default {
  name: "BudgetBar",
  props: {
    title: {
      type: String,
      default: "Budget",
    },
    maxValue: {
      type: Number,
      default: 100,
    },
  },
  computed: {
    minValueDisplay: function () {
      return `€${this.currentValue}`;
    },
    maxValueDisplay: function () {
      return `€${this.maxValue}`;
    },
    widthOfContentBar: function () {
      let width = this.currentValue * 100;
      width /= this.maxValue;
      return `${width}%`;
    },
  },
  data() {
    return {
      currentValue: 10,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/_constants.scss";

.budget {
  color: $color-purple-light;
  margin: 1rem;
  width: 222px;

  .text {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }

  .progressbar {
    width: 100%;
    height: 24px;
    background: $color-purple-dark;
    border-radius: 18px;
    overflow: hidden;

    .content {
      width: 50%;
      height: 100%;
      background: linear-gradient(180deg, $color-yellow 0%, $color-red 100%);
    }
  }
}
</style>
