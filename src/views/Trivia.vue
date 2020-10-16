<template>
  <div class="home">
    <TriviaApp msg="Welcome to Your Vue.js App"/>
   
  </div>
</template>

<script>
// @ is an alias to /src
import TriviaApp from '@/components/TriviaApp.vue'

export default {
  name: 'Trivia',
  components: {
    TriviaApp
  }
}
</script>
