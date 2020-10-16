<template>
    <div>
        <h1>Chuck</h1>
        <div>
            <h2>{{ jokes }}</h2>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex/ChuckStoreModule/store.js';
// import {store} from '../vuex/ChuckStoreModule/store';
export default {
    name: 'Chuck',
      computed: {
      ...mapGetters([
          
          'jokes'
      ]),
      }
}
</script>
<style scoped>

</style>