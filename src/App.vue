<script setup lang="ts">
import Swal from 'sweetalert2';
// import HelloWorld from './components/HelloWorld.vue'
import Card from './components/Card.vue';
import { onMounted, ref } from 'vue';

const item = ref(false);
let swalMessage: any;
let interval = ref<number | undefined>(undefined);

const setItemValue = () => {
  item.value = true;
}

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
  <!-- <HelloWorld/> -->
  <Card title="Nowy wpis" :icon="['far', 'clipboard']"><p style="font-size: small;text-align: left;padding: 0 0.5rem;">Dodaj wpis z zakupów do późniejszego rozliczenia.</p></Card>
  <Card title="Ostatnie wydatki" :icon="['far', 'calendar']"><p style="font-size: small;text-align: left;padding: 0 0.5rem;">Przejrzyj listę nagromadzonych wydatków.</p></Card>
  <Card title="Rozliczenie miesiąca" :icon="['far', 'credit-card']"><p style="font-size: small;text-align: left;padding: 0 0.5rem;">Zatwierdź dodane wydatki i zakończ ostatni miesiąc.</p></Card>
  <button @click="setItemValue">Swal test</button>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
