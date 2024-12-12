<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { formatDate, formatPrice } from '../../utils/helpers';
import { BASE_URL } from '../../config';

interface Entry {
    cost: number;
    description: string;
    excludedCost: number;
    totalSettlement: number;
    createdAt: Date;
}

const entries = ref<Entry[] | null>(null);

onMounted(async () => {
    const response = await axios.get<Entry[]>(`${BASE_URL}/entries`);
    entries.value = response.data;
})
</script>

<template>
    <div style="background-color: whitesmoke;height: 75vh;margin: 0 0.5rem;display:flex;flex-direction: column;justify-content: center;align-items: flex-end;gap: 1rem;overflow:auto;">
        <div v-for="entry in entries" style="background-color: limegreen;padding: 1rem;border-radius: 1.5rem 1.5rem 0 1.5rem;margin-right: 0.5rem;">
            <div class="grid-container">
                <div class="grid-item title-row-center"><h2 style="margin:0;"> {{ entry.description }} </h2></div>
                <div class="grid-item title-row-right"><p style="margin:0"> {{ formatDate(entry.createdAt) }} </p></div>
                <div class="grid-item middle-row-left"> Rachunek </div>
                <div class="grid-item middle-row-right"> {{ formatPrice(entry.cost) }} </div>
                <div class="grid-item middle-row-left"> Wyłączone z ceny </div>
                <div class="grid-item middle-row-right"> {{ formatPrice(entry.excludedCost ?? 20, '-') }} </div>
                <div class="grid-item middle-row-left"> Do rozliczenia </div>
                <div class="grid-item middle-row-right"> {{ formatPrice(entry.totalSettlement ?? 10) }} </div>
            </div>
        </div>
    </div>
</template>

<style>
.grid-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}

.title-row-center {
    grid-column: 2 / 4;
}

.title-row-right {
    grid-column: 4 / 5;
}

.middle-row-left {
    grid-column: 1 / 3;
    text-align: left;
}

.middle-row-right {
    grid-column: 3 / 5;
    text-align: right;
}

.grid-item {

}
</style>
