<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';
import { BASE_URL } from '../../config';
import Swal from 'sweetalert2';

const form = ref({
    cost: '',
    description: ''
});

const addEntry = async () => {
    try {
        const response = await axios.post(`${BASE_URL}/entries`, {
            cost: form.value.cost,
            description: form.value.description
        });

        if (response.status !== 200) {
            Swal.fire({
                text: 'Coś poszło nie tak.',
                icon: 'error',
                toast: true,
                position: 'bottom',
                showConfirmButton: false,
                timer: 2000
            });
        }

        Swal.fire({
            text: 'Wpis zamieszczony.',
            icon: 'success',
            toast: true,
            position: 'bottom',
            showConfirmButton: false,
            timer: 2000
        });
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}
</script>

<template>
    <div class="card" style="flex-direction: column;padding: 1rem 0.5rem;">
        <div style="display: flex; flex-direction: column;">
            <label for="cost" style="text-align: left;">Kwota</label>
            <input type="number" id="cost" value="" v-model="form.cost" />
        </div>
        <div style="display: flex; flex-direction: column;">
            <label for="description" style="text-align: left;">Opis</label>
            <textarea id="description" rows="4" v-model="form.description" />
        </div>
        <button @click.prevent="addEntry">Dodaj</button>
    </div>
</template>
