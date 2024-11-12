<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue'
import { BASE_URL } from '../config';

// defineProps<{ msg: string }>()

// const count = ref(0)
const receivedObject = ref(null)

const getObject = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/entries`);
  
    if (response.status === 200) {
      receivedObject.value = response.data;
    }
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};
</script>

<template>
  <div>
    <!-- <button type="button" @click="count++">count is {{ count }}</button> -->
    <p>{{ receivedObject ?? 'None' }}</p>
    
    <button @click="getObject">Get the object</button>
  </div>

  <p class="read-the-docs">xd</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
