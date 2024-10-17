<script setup>
    import Navbar from "@/components/Navbar.vue";
    import {useAuthStore} from "@/store/auth.js";
    import {onMounted} from "vue";

    onMounted(async () => {
        const   authStore = useAuthStore();
        await authStore.initTokens();
        console.log("access_token" + authStore.access_token);
        console.log("refresh_token" + authStore.refresh_token);
    });
</script>


<template>
    <navbar />
    <RouterView />
</template>

<style scoped>

</style>