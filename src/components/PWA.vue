<script setup lang="ts">
import { ref } from 'vue';

    type BeforeInstallPromptEvent = Event & {
        prompt: () => Promise<void>;
        userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
    };

    const installPrompt = ref<BeforeInstallPromptEvent | null>(null);

    // const registerServiceWorker = async (): Promise<void> => {
    //     if ('serviceWorker' in navigator) {
    //         try {
    //             await navigator.serviceWorker.register('/service-worker.js');
    //         } catch (e) {
    //             console.error('Service worker registration failed.');
    //         }
    //     }
    // };

    window.addEventListener('beforeinstallprompt', (e: Event) => {
        e.preventDefault();
        installPrompt.value = e as BeforeInstallPromptEvent;
    });

    const installApp = async (): Promise<void> => {
        if (installPrompt.value) {
            installPrompt.value.prompt();
            const choiceResult = await installPrompt.value.userChoice;

            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the A2HS prompt.');
            } else {
                console.log('User dismissed the A2HS prompt.');
            }
        }
    };
</script>

<template>
    <div>
        <div>
            <p>Install</p>
            <button @click.stop="installApp">Install here</button>
        </div>
    </div>
</template>
