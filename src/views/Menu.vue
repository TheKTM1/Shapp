<script setup lang="ts">
import Card from '../components/Card.vue';
</script>

<template>
    <RouterLink to="/new-entry">
        <Card title="Nowy wpis" :icon="['far', 'clipboard']"><p style="font-size: small;text-align: left;padding: 0 0.5rem;">Dodaj wpis z zakupów do późniejszego rozliczenia.</p></Card>
    </RouterLink>
    <RouterLink to="/entries-list">
        <Card title="Ostatnie wydatki" :icon="['far', 'calendar']"><p style="font-size: small;text-align: left;padding: 0 0.5rem;">Przejrzyj listę nagromadzonych wydatków.</p></Card>
    </RouterLink>
    <RouterLink to="/settlement">
        <Card title="Rozliczenie miesiąca" :icon="['far', 'credit-card']"><p style="font-size: small;text-align: left;padding: 0 0.5rem;">Zatwierdź dodane wydatki i zakończ ostatni miesiąc.</p></Card>
    </RouterLink>
</template>
