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
            <div style="border-bottom:1px black solid">
                <h4 style="margin: 0;text-align: left;padding: 0.5rem;">{{ props.title }}</h4>
            </div>
            <slot></slot>
        </div>
    </div>
</template>