<template>
    <div class="capital">
      <ul class="list">
        <li class="item" v-for="(city,key) in cities" :key="key" @click="clickLetter">{{key}}</li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'CityCapital',
  props: {
    cities: ''
  },
  methods: {
    clickLetter (e) {
      this.$emit('change', e.target.innerText)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~scss/variables.scss';
.capital{
  position: absolute;
  right: 0;
  top: 1.56rem;
  bottom: 0;
  width: .6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .list{
    .item{
      text-align: center;
      line-height: .4rem;
      color: $bgcolor;
    }
  }
}
</style>
