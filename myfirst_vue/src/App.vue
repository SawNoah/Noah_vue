<template>
  <div>
    <header>
      <Nav />
      <Counter />
    </header>
    <main>
      <router-view></router-view>
      <h1 class="mx-10 my-10 text-3xl text-blue-900 italic hover:not-italic ">{{ msg }}</h1>
      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div class="md:flex">
          <div class="md:shrink-0">
            <img class="h-48 w-full object-cover md:h-full md:w-48" v-bind:src="catImg"
              alt="Modern building architecture">
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Vue Class</div>
            <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. Perferendis corrupti voluptatum at. </a>
            <p class="mt-2 text-slate-500">Aute non officia nostrud reprehenderit cupidatat consectetur nostrud laborum
              officia laborum labore minim eiusmod.Asperiores, harum beatae quae odio velit cum dolorum recusandae labore!
              Atque et, culpa aut voluptates non earum veniam.</p>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<style scoped>
/* Add your styles here */
.active {
  color: brown;
}
</style>

<script>
export default {
  data() {


    return {
      msg: 'Welcome to Web System Class!',
      catImg: './src/assets/images/cabbage.jpg',
      message: "We Love Web Sys Class.",
      count: 0,
      showWelcome: true,
      students: ['Samuel', 'Kapaw So Min', 'Charles'],
      teacher: {
        firstName: 'Min Maung',
        lastName: 'Maung',
      },
      isActive: true,
    };
  },
  computed: {
    like() {
      return this.count + " Like";
    },
  },
  mounted() {
    console.log("Mounted");
  },
  created() {
    console.log('Created');
  },
  methods: {},
};
</script>
