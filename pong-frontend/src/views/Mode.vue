<!--<template>-->
<!--    <div class="content">-->
<!--        <div class="left-side">-->

<!--            &lt;!&ndash; LOCAL &ndash;&gt;-->
<!--            <router-link v-if="!isAuthenticated" to="/login" class="left-bottom link">-->
<!--                <div class="text-container">-->
<!--                    <p class="title">{{ $t('local') }} 🔒</p>-->
<!--                    <p class="description">{{ $t('localDesc') }}</p>-->
<!--                </div>-->
<!--            </router-link>-->
<!--            <router-link v-else-if="!isOTPVerified" to="/two-factor-auth" class="left-bottom link">-->
<!--                <div class="text-container">-->
<!--                    <p class="title">{{ $t('local') }} 🔒</p>-->
<!--                    <p class="description">{{ $t('localDesc') }}</p>-->
<!--                </div>-->
<!--            </router-link>-->
<!--            <router-link v-else to="/pong-local" class="left-up link">-->
<!--                <div class="text-container">-->
<!--                    <p class="title">{{ $t('local') }}</p>-->
<!--                    <p class="description">{{ $t('localDesc') }}</p>-->
<!--                </div>-->
<!--            </router-link>-->

<!--            &lt;!&ndash; MULTIPLAYER &ndash;&gt;-->
<!--            <router-link v-if="!isAuthenticated" to="/login" class="left-bottom link">-->
<!--                <div class="text-container">-->
<!--                    <p class="title">{{ $t('multiplayer') }} 🔒</p>-->
<!--                    <p class="description">{{ $t('multiplayerDesc') }}</p>-->
<!--                </div>-->
<!--            </router-link>-->
<!--            <router-link v-else-if="!isOTPVerified" to="/two-factor-auth" class="left-bottom link">-->
<!--                <div class="text-container">-->
<!--                    <p class="title">{{ $t('multiplayer') }} 🔒</p>-->
<!--                    <p class="description">{{ $t('multiplayerDesc') }}</p>-->
<!--                </div>-->
<!--            </router-link>-->
<!--            <router-link v-else to="/pong-multiplayer" class="left-up link">-->
<!--                <div class="text-container">-->
<!--                    <p class="title">{{ $t('multiplayer') }}</p>-->
<!--                    <p class="description">{{ $t('multiplayerDesc') }}</p>-->
<!--                </div>-->
<!--            </router-link>-->

<!--            &lt;!&ndash; AI &ndash;&gt;-->
<!--            <router-link v-if="!isAuthenticated" to="/login" class="left-bottom link">-->
<!--                <div class="text-container">-->
<!--                    <p class="title">{{ $t('ai') }} 🔒</p>-->
<!--                    <p class="description">{{ $t('aiDesc') }}</p>-->
<!--                </div>-->
<!--            </router-link>-->
<!--            <router-link v-else-if="!isOTPVerified" to="/two-factor-auth" class="left-bottom link">-->
<!--                <div class="text-container">-->
<!--                    <p class="title">{{ $t('ai') }} 🔒</p>-->
<!--                    <p class="description">{{ $t('aiDesc') }}</p>-->
<!--                </div>-->
<!--            </router-link>-->
<!--            <router-link v-else to="/pong-ai" class="left-up link">-->
<!--                <div class="text-container">-->
<!--                    <p class="title">{{ $t('ai') }}</p>-->
<!--                    <p class="description">{{ $t('aiDesc') }}</p>-->
<!--                </div>-->
<!--            </router-link>-->
<!--        </div>-->

<!--        <div class="right-side">-->
<!--            &lt;!&ndash; TOURNAMENT &ndash;&gt;-->
<!--            <router-link v-if="!isAuthenticated" to="/login" class="left-bottom link">-->
<!--                <div class="text-container">-->
<!--                    <p class="title">{{ $t('tournament') }} 🔒</p>-->
<!--                    <p class="description">{{ $t('tournamentDesc') }}</p>-->
<!--                </div>-->
<!--            </router-link>-->
<!--            <router-link v-else-if="!isOTPVerified" to="/two-factor-auth" class="left-bottom link">-->
<!--                <div class="text-container">-->
<!--                    <p class="title">{{ $t('tournament') }} 🔒</p>-->
<!--                    <p class="description">{{ $t('tournamentDesc') }}</p>-->
<!--                </div>-->
<!--            </router-link>-->
<!--            <router-link v-else-if="isAuthenticated && isOTPVerified && isTournamentFinished" to="/tournament/create"-->
<!--                         class="link">-->
<!--                <div class="text-container">-->
<!--                    <p class="title">{{ $t('tournament') }}</p>-->
<!--                    <p class="description">{{ $t('tournamentDesc') }}</p>-->
<!--                </div>-->
<!--            </router-link>-->
<!--            <router-link v-else-if="isAuthenticated && isOTPVerified && !isTournamentFinished" to="/tournament" class="link">-->
<!--                <div class="text-container">-->
<!--                    <p class="title">{{ $t('tournament') }}</p>-->
<!--                    <p class="description">{{ $t('tournamentDesc') }}</p>-->
<!--                </div>-->
<!--            </router-link>-->
<!--        </div>-->
<!--    </div>-->
<!--</template>-->

<template>
    <h1>Hello user you have access now</h1>
</template>

<script setup>
    import {onMounted, ref} from "vue";

    const   isTournamentFinished = ref(true);
    const   isAuthenticated = ref(false);
    const   isOTPVerified = ref(false);


    onMounted(() => {
        console.log("Mode view has been mounted. ");
    });
</script>

<style scoped>

<style scoped>
    .content {
        display: flex;
        height: calc(100vh - 90px);
        color: white;
        background-color: var(--background-color);
        font-size: 50px;
        font-family: '8bit', sans-serif;
        margin-top: 82px;
        box-sizing: border-box;
    }

    .left-side {
        display: flex;
        flex-direction: column;
        width: 50%;
        border-right: 1px solid rgb(25, 25, 25);
    }

    .left-up, .left-middle, .left-bottom {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid rgb(25, 25, 25);
        position: relative;
        overflow: hidden;
        transition: background-color 0.3s ease;
    }

    .left-middle {
        border-top: 1px solid rgb(25, 25, 25);
    }

    .left-bottom {
        border-bottom: none;
        border-top: 1px solid rgb(25, 25, 25);
    }

    .right-side {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-left: 1px solid rgb(25, 25, 25);
    }

    .link {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: white;
        position: relative;
        overflow: hidden;
    }

    .link:hover {
        background-color: rgb(20, 20, 20);
        color: var(--primary-color);
    }

    .text-container {
        text-align: center;
        position: relative;
        overflow: hidden;
    }

    .title {
        transition: transform 0.3s ease;
    }

    .description {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease;
        color: rgb(200, 200, 200);
        padding: 0 10px;
        margin-top: 10px;
        box-sizing: border-box;
    }

    .link:hover .title {
        transform: translateY(-10px);
    }

    .link:hover .description {
        max-height: 100px;
    }
</style>