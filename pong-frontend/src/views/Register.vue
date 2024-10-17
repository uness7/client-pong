<template>
    <div class="content">
        <div class="registerBox">
            <div class="inner">
                <div class="register">
                    <div class="top">
                        <div class="title">Create Account</div>
                    </div>
                    <form @submit.prevent="handleSubmit">
                        <div class="form">
                            <input
                                type="text"
                                placeholder="username"
                                v-model="username"
                                class="w100"
                                required
                            />
                            <input
                                type="text"
                                placeholder="First Name"
                                v-model="first_name"
                                class="w100"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                v-model="last_name"
                                class="w100"
                                required
                            />
                            <input
                                type="email"
                                class="w100"
                                placeholder="Email"
                                v-model="email"
                                required
                                @blur="validateEmail"
                            />
                            <input
                                type="password"
                                class="w100"
                                placeholder="Password"
                                v-model="password"
                                required
                                @blur="validatePassword"
                            />
                            <input
                                type="password"
                                class="w100"
                                placeholder="Confirm Password"
                                v-model="confirmPassword"
                                required
                                @blur="validateConfirmPassword"
                            />
                            <input
                                type="checkbox"
                                id="consent"
                                name="consent"
                                required
                            />
                            <label for="consent" id="consent">I agree to the <RouterLink to="privacy" class="aaa">privacy policy</RouterLink>.</label>
                        </div>
                        <button
                            type="submit"
                            class="action"
                            :class="{ 'action-disabled': !isFormValid }"
                            :disabled="!isFormValid"
                        >
                            Create Account
                        </button>
                    </form>
                    <div class="error-message" v-if="errorMessage">
                        {{ errorMessage }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import '@/assets/styles/RegisterView.css'
    import {ref, computed, onMounted} from 'vue';
    import {useRouter} from 'vue-router';
    import {useAuthStore} from '@/store/auth';
    const router = useRouter();
    const authStore = useAuthStore();

    const username = ref('');
    const first_name = ref('');
    const last_name = ref('');
    const email = ref('');
    const password = ref('');
    const confirmPassword = ref('');
    const errorMessage = ref('');
    const isLoading = ref(false);

    const emailRegex = /^[\w.-]+@[\w.-]+\.\w+$/;
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

    const validateEmail = () => {
        if (!emailRegex.test(email.value)) {
            errorMessage.value = "Please enter a valid email address.";
        } else {
            errorMessage.value = "";
        }
    };

    const validatePassword = () => {
        if (!passwordRegex.test(password.value)) {
            errorMessage.value = "Password must be at least 8 characters long and contain at least one number and one special character.";
        } else {
            errorMessage.value = "";
        }
    };

    const validateConfirmPassword = () => {
        if (password.value !== confirmPassword.value) {
            errorMessage.value = "Passwords do not match.";
        } else {
            errorMessage.value = "";
        }
    };

    const handleSubmit = async () => {
        if (isFormValid.value) {
            isLoading.value = true;
            const data = {
                username: username.value,
                first_name: first_name.value,
                last_name: last_name.value,
                email: email.value,
                password: password.value,
            };
            try {
                const success = await authStore.register(data);
                if (success) {
                    await router.push('/login');
                } else {
                    errorMessage.value = "Registration failed. Please try again.";
                    alert(errorMessage.value);
                }
            } catch (error) {
                console.error("Registration error:", error);
                errorMessage.value = "An error occurred during registration.";
                alert(errorMessage.value);
            } finally {
                isLoading.value = false;
            }
        }
        console.log("register was submitted. ");
    };

    const isFormValid = computed(() =>
        username.value.trim() !== "" &&
        first_name.value.trim() !== "" &&
        last_name.value.trim() !== "" &&
        emailRegex.test(email.value) &&
        passwordRegex.test(password.value) &&
        password.value === confirmPassword.value
    );


    onMounted(() => {
        console.log("Register View has been mounted. ");
    });
</script>
