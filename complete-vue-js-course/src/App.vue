<script setup lang="ts">
  import { ref, onMounted, computed } from "vue";
  import Hello from "./components/HelloWorld.vue";
  import NumCalculation from "./components/NumCalculation.vue";

  const count = ref(0);
  const numbers = ref<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const pushedBtns = ref<number[]>([]);
  const value = ref<string[]>(["a"]);

  function increment() {
    count.value++;
  }

  function isEven(num: number): boolean {
    return num % 2 === 0;
  }

  function getClass(num: number): string {
    return isEven(num) ? "blue" : "red";
  }

  function pushButtons(num: number) {
    pushedBtns.value.push(num);
  }

  // INFO: Example of a computed property (not used in template)
  // const evenList = computed(() => {
  //   return numbers.value.filter(num => isEven(num));
  // });

  const error = computed(() => {
    if (value.value.length < 5) {
      return 'Input must be at least 5 characters long.';
    } else {
      return '';
    }
  })

  onMounted(() => {
    console.log("Initial count is:", count.value);
  });
</script>

<template>
  <button @click="increment">Count is: {{  count  }}</button>

  <div v-if="isEven(count)">The count is even.</div>
  <div v-else>The count is odd.</div>

  <br />

  <input v-model="value" />

  <div class="red">
    {{ error }}
  </div>

  <br />

  <NumCalculation
    :class="getClass(number)"
    :key="number"
    :num="number"
    @click="pushButtons(number)"
    v-for="number in numbers"
  />

  <hr />

  <NumCalculation
    :class="getClass(btn)"
    :key="btn"
    :num="btn"
    v-for="btn in pushedBtns"
  />

  <Hello greeting="Hello from App.vue" />
  <Hello greeting="Hi"/>
</template>

<style scoped>
  .blue {
    color: blue;
  }
  .red {
    color: red;
  }
</style>
