<script setup>
  import {ref, onMounted} from "vue";
  import {useAuthStore} from "@/store/auth.js";
  import CustomButton from "./Button.vue";

  const     isLoggedIn = ref(false);
  const     authStore = useAuthStore();

  async function logout() {
	  await authStore.logout();
  }
  
  onMounted(() => {
      isLoggedIn.value = authStore.isLoggedIn;
      console.log(isLoggedIn.value)
  })
</script>

<template>
  <div class="top-bar">
    <header id="top-bar-content">
      <RouterLink to="/" id="logo-text">ft_transcendence</RouterLink>
      <div class="nav-links">
	      <router-link to="/about" id="about-button">About</router-link>
	      <router-link to="/team" id="team-button">Team</router-link>
	      <router-link v-if="!isLoggedIn" to="/login" id="login-button">login</router-link>
	        <div v-else class="dropdown">
	          <button class="dropbtn">Younes Zioual</button>
	          <div class="dropdown-content">
	                <router-link to="/user">Profile</router-link>
	                <router-link to="/user/account-settings">Settings</router-link>
	                <router-link to="/add-friends">Friends list</router-link>
		            <router-link to="/match-history">Game History</router-link>
		            <CustomButton @click="logout"  text="logout" text-color="white" width="100" />
	          </div>
	        </div>
      </div>
    </header>
  </div>
</template>

<style scoped>

div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

@font-face {
  font-family: '8bit';
  src: url('../assets/font/8bit.ttf') format('truetype');
}

:global(body) {
  background-color: var(--background-color);
}

.top-bar {
  width: 100%;
  background-color: black;
  position: sticky;
  top: 0;
  z-index: 1000;
}

#top-bar-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0;
    font-family: '8bit', sans-serif;
    width: 100%;
    color: white;
}

#logo-text {
    font-size: 40px;
    text-decoration: none;
    background-color: rgb(25, 25, 25);
    color: var(--primary-color);
    padding: 15px 20px;
    box-sizing: border-box;
    border-bottom: 1px solid rgb(70, 70, 70);
    border-right: 1px solid rgb(70, 70, 70);
}

.nav-links {
  display: flex;
  align-items: center;
}

#about-button,
#team-button,
#login-button {
  background-color: rgb(10, 10, 10);
  border: none;
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-size: xx-large;
  margin-right: 20px;
  font-family: '8bit', sans-serif;
  transition: all 0.2s ease;
}

#about-button:hover,
#team-button:hover,
#login-button:hover {
  transform: scale(1.05);
  color: var(--primary-color);
}

.dropbtn {
  background-color: var(--background-color);
  color: rgb(255, 255, 255);
  font-size: xx-large;
  border: none;
  cursor: pointer;
  font-family: '8bit', sans-serif;
  transition: all 0.2s ease;
}

.dropbtn:hover {
  color: var(--primary-color);
}

.dropdown {
  position: relative;
}

.dropdown-content {
  font-size: 20px;
  padding-top: 10px;
  display: none;
  position: absolute;
  background-color: var(--background-color);
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 11;
  left: 0;
}

.dropdown-content a {
  color: rgb(255, 255, 255);
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: rgb(20, 20, 20);
  color: white;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
