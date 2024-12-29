<script setup lang="ts">
import Swal from 'sweetalert2';
import { onMounted, ref } from 'vue';
import PWA from './components/PWA.vue';

const item = ref(false);
let swalMessage: any;
let interval = ref<number | undefined>(undefined);

const checkForValue = () => {
  if (item.value == true) {
    clearInterval(interval.value)
    
    swalMessage.close()

    Swal.fire({
      text: 'Połączono!',
      icon: 'success',
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 2000
    });
  }
}

onMounted(() => {
  if (item.value == false) {
    swalMessage = Swal.fire({
      text: 'Oczekiwanie na odpowiedź serwera...',
      icon: 'info',
      toast: true,
      position: 'top',
      showConfirmButton: false
    });

    interval.value = setInterval(checkForValue, 500);
  }
})
</script>

<template>
  <RouterView/>

  <PWA/>
</template>

<style>
  a {
    text-decoration: none;
    color: inherit;
  }
</style>
