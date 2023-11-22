<!--script setup>
import Header from './components/Header.vue'
//import HelloWorld from './components/HelloWorld.vue'
//import TheWelcome from './components/TheWelcome.vue'


</script-->

<template>
  <header class="wrapper">
    <!--Header /-->
    LAP Vue by Noah
  </header>

  <main>
    <h2>{{ message }}</h2>

    Likes <b>{{ count }}</b><br>
    <button class="" @click="count++">ကြိုက်</button>
    <button @click="count--">မကြိုက်</button>
    <button @click="increaseNumber"> increase</button>
  </main>
</template>

<script>
import { nextTick } from 'vue';

export default {
  data() {
    return {
      message: "We Love Vue.",
      count: 0
    }
  },
  mounted() {
    console.log("Mounted");
    console.log("message >> " + this.message);
    this.count = 1;
    this.increaseNumber();
  },

  create() {
    console.log("Created");
  },

  methods: {
    async increment() {
      this.count++
      await nextTick()
    },
    increaseNumber() {
      console.log("Call increase Number")
      this.count += 1
    }
  }
}
</script>




<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
