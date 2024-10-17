<template>
    <div class="content">
        <div class="loginBox">
            <div class="inner">
                <div class="signIn">
                    <div class="top">
                        <div class="title">sign up
                            <router-link to="/register" class="rr">register</router-link>
                        </div>
                    </div>
                    <form @submit.prevent="handleSubmit">
                        <div class="form">
                            <input
                                required aria-required="true"
                                aria-invalid="false"
                                aria-label="E-mail"
                                type="email"
                                pattern="^[\w.-]+@[\w.-]+\.\w+$"
                                class="w100"
                                :class="{ invalid: emailError }"
                                placeholder="Email"
                                autofocus @blur="validateEmail"
                                @keydown="validateEmail"
                                v-model="email"
                            />
                            <input
                                required
                                aria-required="true"
                                type="password"
                                class="w100"
                                :class="{ invalid: passwordError }"
                                placeholder="Password"
                                v-model="password"

                                @blur="validatePassword"
                                @keydown="validatePassword"/>
                        </div>
                        <input
                            type="submit"
                            value="Sign in"
                            class="action"
                            :class="{ 'action-disabled': !loginValid }"
                        />
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import '@/assets/styles/LoginView.css'
    import {useRouter} from "vue-router";
    import {computed, ref} from "vue";
    import {useAuthStore} from "@/store/auth.js";

    const router = useRouter();
    const emailRegex = /^[\w.-]+@[\w.-]+\.\w+$/;
    const email = ref('');
    const password = ref('');
    const emailError = ref(false);
    const passwordError = ref(false);
    const   authStore = useAuthStore();

    const validateEmail = () => {
        emailError.value = !emailRegex.test(email.value);
    };

    const validatePassword = () => {
        passwordError.value = password.value === '';
    };

    const handleSubmit = async () => {
        const formData = {
            email: email.value,
            password: password.value
        };
        const success = await authStore.login(formData);
        if (success) {
            await router.push('/mode');
        } else {
            await router.push('/login');
            alert("Login has failed");
        }
    };

    const emailValid = computed(() => emailRegex.test(email.value));
    const passwordValid = computed(() => password.value.length > 0);
    const loginValid = computed(() => emailValid.value && passwordValid.value);

</script>