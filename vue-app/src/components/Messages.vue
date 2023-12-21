<template>
  <div>
    <div class="user-selection">
      <label for="user">Select user:</label>
      <div v-for="user in users" :key="user" @click="selectUser(user)" class="user-item">
        {{ user }}
      </div>
    </div>

    <div>
      <h2 v-if="selectedUser">Chat with {{ selectedUser }}</h2>
      <div class="messages-container">
        <label for="messages">Enter your message:</label>
        <div v-for="message in messages" :key="message.id" class="message">
          <strong>{{ message.user.email }}:</strong> {{ message.message }}
        </div>
      </div>
      <textarea v-model="newMessage" placeholder="Type your message..."></textarea>
      <button @click="sendMessage" :disabled="!selectedUser">Send Message</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const users = ref([]);
const selectedUser = ref('');
const messages = ref([]);
const newMessage = ref('');

onMounted(() => {
  // Fetch the list of users who have signed in with their email addresses
  fetchUsers();
});

const fetchUsers = async () => {
  try {
    const response = await fetch('http://localhost:3400/api/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }

    const usersData = await response.json();
    users.value = usersData.map(user => user.email);
  } catch (error) {
    console.error(error);
    alert('Error fetching users');
  }
};

const selectUser = (user) => {
  // Set the selectedUser when a user is clicked
  selectedUser.value = user;
  // Fetch messages for the selected user
  fetchMessages();
};

const fetchMessages = async () => {
  try {
    const response = await fetch(`http://localhost:3400/api/messages?userEmail=${selectedUser}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch messages');
    }

    const messagesData = await response.json();
    messages.value = messagesData;
  } catch (error) {
    console.error(error);
    alert('Error fetching messages');
  }
};

const sendMessage = async () => {
  try {
    const response = await fetch('http://localhost:3400/api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
      body: JSON.stringify({
        message: newMessage.value,
        to: selectedUser,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send message');
    }

    newMessage.value = '';
    fetchMessages();
  } catch (error) {
    console.error(error);
    alert('Error sending message');
  }
};
</script>

<style scoped>
.user-item {
  cursor: pointer;
  margin-bottom: 5px;
}

.user-item:hover {
  text-decoration: underline;
}

/* Your styles */
</style>
