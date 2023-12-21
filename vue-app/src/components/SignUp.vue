<template>
  <div>
    <h3 style="margin-left: 16px">Sign Up</h3>
    <form @submit.prevent="handleSignUp">
      <label for="Name">Name:</label>
      <input v-model="Name" id="Name" name="Name" type="text" />

      <label for="birthday">Birthday:</label>
      <input
        v-model="birthday"
        id="birthday"
        name="birthday"
        type="date"
        placeholder="Select Date"
      />

      <label for="email">Email:</label>
      <input v-model="email" id="email" name="email" type="email" />

      <label for="password">Password:</label>
      <input v-model="password" id="password" name="password" type="password" />

      <div>
        <button type="submit">Sign Up</button>
        <button type="button" @click="goBack" style="color: red;">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const fullName = ref("");
    const birthday = ref("");
    const router = useRouter();

    const handleSignUp = async () => {
      try {
        const resp = await fetch("http://localhost:3400/api/users", {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email.value,
            password: password.value,
            name: Name.value,
            birthday: birthday.value,
          }),
        });

        if (!resp.ok) {
          const errorMsg = (await resp.json())?.errors[0].message;
          throw new Error(errorMsg);
        }

        const user = await resp.json();
        console.log(user);

        router.replace("/home");
      } catch (error) {
        alert("Sign Up Error: " + error.message);
      }
    };

    const goBack = () => {
      router.back();
    };

    return { email, password, Name, birthday, handleSignUp, goBack };
  },
};
</script>

<style scoped>
</style>
