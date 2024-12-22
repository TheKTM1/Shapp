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
    <div style="background-color: whitesmoke;height: 75vh;margin: 0 0.5rem;overflow: auto">
        <div style="display:flex;flex-direction: column;justify-content: center;gap: 1rem">
            <div v-for="entry in entries">
                <div class="grid-line-container">
                    <div class="grid-bottom-border"></div>
                    <div class="line-date"> {{ formatDate(entry.createdAt) }} </div>
                    <div class="grid-bottom-border"></div>
                    <div></div>
                    <div></div>
                </div>
                <div class="grid-container" style="background-color: limegreen;border-radius: 1.5rem 1.5rem 0 1.5rem;margin: 0 0.5rem 0 2rem;box-shadow:0.25rem 0.25rem rgba(0, 0, 0, 0.1);">
                    <div class="grid-item title-row-center"><h2 style="margin:0;"> {{ entry.description }} </h2></div>
                    <div class="grid-item middle-row-left"> Rachunek </div>
                    <div class="grid-item middle-row-right"> {{ formatPrice(entry.cost) }} </div>
                    <div class="grid-item middle-row-left"> Wyłączone z ceny </div>
                    <div class="grid-item middle-row-right"> {{ formatPrice(entry.excludedCost ?? 0, '-') }} </div>
                    <div class="grid-item middle-row-left"> Do rozliczenia </div>
                    <div class="grid-item middle-row-right"> {{ formatPrice(entry.totalSettlement) }} </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.grid-line-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto;
}

.line-date {
    grid-row: span 2;
    display: flex;
    justify-content: center;
    align-items: center;
}

.grid-bottom-border {
    border-bottom: 2px solid gray;
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
}

.title-row-center {
    grid-column: 2 / 4;
    padding: 0.5rem 0.25rem;
}

.middle-row-left {
    grid-column: 1 / 3;
    text-align: left;
    padding: 0.5rem 0 0.5rem 1rem;
    border-top: 1px solid black;
}

.middle-row-right {
    grid-column: 3 / 5;
    text-align: right;
    padding: 0.5rem 1rem 0.5rem 0;
    border-top: 1px solid black;
}

.grid-item {

}
</style>
