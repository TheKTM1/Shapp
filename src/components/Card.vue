<script setup lang="ts">
    interface Props {
        title: string,
        icon: string[]
    }
    const props = defineProps<Props>();
</script>

<template>
    <div class="card">
        <div style="width:20%;display:flex;justify-content: center;align-items: center;">
            <font-awesome-icon :icon="props.icon" />
        </div>
        <div style="width:80%">
            <div style="border-bottom:1px black solid;display:flex;justify-content: space-between;">
                <h4 style="margin: 0;text-align: left;padding: 0.5rem;">{{ props.title }}</h4>
                <div style="overflow:hidden;display:flex;align-items:center;padding: 0 0.5rem;">
                    <div v-for="n in 3" :key="n">
                        <div style="background-color:limegreen;width:15px;height:20px;transform:skew(-30deg);margin:0.25rem;"></div>
                    </div>
                </div>
            </div>
            <slot></slot>
        </div>
    </div>
</template>