import { defineStore } from 'pinia'
import {ref} from "vue";
import axios from "axios";
import apiClient from "@/Services/APICalls.js";

export const useAuthStore = defineStore(
    'auth',
    () => {
        const   access_token = ref('');
        const   refresh_token = ref('');
        const   user = ref({});
        const   isLoggedIn = ref(false);

        function initTokens() {
            const   access_token = localStorage.getItem('access');
            const   refresh_token = localStorage.getItem('refresh');
        }

        function    setAccessToken(token) {
            access_token.value = token;
            localStorage.setItem('access', access_token.value);
        }

        function    setRefreshToken(token) {
            refresh_token.value = token;
            localStorage.setItem('refresh', token);
        }

        function clearTokens() {
            access_token.value = null;
            refresh_token.value = null;
            localStorage.removeItem("access");
            localStorage.removeItem("refresh");
        }

        async function apiBlacklistToken() {
            try {
                const response = await apiClient.post(
                    "/api/authentication/logout/",
                    {
                        refresh: refresh_token.value,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${access_token.value}`,
                            'Content-Type': 'application/json'
                        }
                    }
                );
                if (response.status !== 204) {
                    console.log('Failed to blacklist the token');
                }
                else
                    console.error("Logged out successfully!");
            } catch (error) {
                throw new Error(error);
            }
        }
        //
        // async function getRefreshToken() {
        //     try {
        //         const   response = await axios.post(
        //             'http://localhost:8000/api/authentication/refresh/',
        //             {
        //                 refresh: refresh_token,
        //             },
        //         );
        //     } catch (err) {
        //         throw new Error(err);
        //     }
        // }

        function    setUser(user) {
            user.value = user;
        }
        async function login(credentials) {
            try {
                const response = await axios.post(
                    "http://localhost:8000/api/authentication/login/",
                    credentials
                );
                isLoggedIn.value = true;
                console.log("response :  " + response);
                setAccessToken(response.data.access);
                setRefreshToken(response.data.refresh);
                // this.user_id = response.data.user.user_id;
                // this.isOTPVerified = response.data.user.is_otp_verified;
                // await this.fetchUser(response.data.user.id);
                return true;
            } catch (error) {
                console.error("Login failed:", error);
                return false;
            }
        }
        async function register(userData) {
            try {
                await axios.post(
                    "http://localhost:8000/api/authentication/register/",
                    userData
                );
                return await login({
                    username: userData.username,
                    first_name: userData.first_name,
                    last_name: userData.last_name,
                    email: userData.email,
                    password: userData.password,
                });
            } catch (error) {
                console.error("Registration failed:", error);
                return false;
            }
        }

        async function logout() {
            isLoggedIn.value = false;
            await apiBlacklistToken();
            clearTokens();
        }

        initTokens();

        return {
            access_token,
            refresh_token,
            user,
            isLoggedIn,
            initTokens,
            setAccessToken,
            setRefreshToken,
            setUser,
            login,
            register,
            logout
        };
    },
    {
        persist: true,
    }
);