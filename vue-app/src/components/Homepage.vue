<template>
  <div>
    <nav class="navbar">
      <div class="container">
        <span class="navbar-brand">Whatsapp Payload Vue</span>
      </div>
    </nav>
    <div class="container" style="margin-top: 0 auto;">
      <p class="homepage-text">Homepage</p>
      <div class="buttons-container">
        <router-link to="/signin">
          <button class="sign-in-button">Sign In</button>
        </router-link>
        <router-link to="/signup">
          <button class="sign-up-button">Sign Up</button>
        </router-link>
        <router-link to="/messages">
          <button class="messages-button">Messages</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";

onMounted(async () => {
  // Your initialization logic here
});

const getUser = async () => {
  try {
    // Your logic here
  } catch (error: any) {
    // Handle errors
  }
};

const handleLogout = async () => {
  try {
    // Your logout logic here
  } catch (error: any) {
    // Handle errors
  }
};

const router = useRouter();

const goToSignUp = () => {
  console.log('Going to Sign Up page');
  router.push("/signup");
};

const goToSignIn = () => {
  console.log('Going to Sign In page');
  router.push("/signin");
};
</script>

<style scoped>
  .navbar {
    background-color: rgb(37, 153, 211); /* Whatsapp green color */
    padding: 10px 0;
    color: #fff;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1;
  }
  .navbar-brand {
    font-size: 1.5em;
    font-weight: bold;
  }

  .homepage-text {
    top: 0;
    z-index: 1;
    margin-top: 5px;
    font-size: 1.2em;
  }

  .buttons-container {
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
  }

  .sign-in-button,
  .sign-up-button
  {
    border: 10px salmon;
    margin-top: 10px;
    padding: 10px 33px;
    font-size: 1em;
    cursor: pointer;
  }
  .messages-button {
    border: 10px salmon;
    margin-top: 10px;
    padding: 10px 24px;
    font-size: 1em;
    cursor: pointer;
  }
  .sign-in-button,
  .sign-up-button {
    background-color: #257fd3; /* Whatsapp green color */
    border-radius: 11px;
    color: #fff;
  }
  .messages-button {
    background-color: #257fd3; /* Whatsapp darker green color */
    border-radius: 11px;
    color: #fff;
  }
</style>
