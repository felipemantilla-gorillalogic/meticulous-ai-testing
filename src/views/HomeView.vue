<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Message {
  id: number
  text: string
  sender: 'user' | 'bot'
}

const messages = ref<Message[]>([])
const newMessage = ref('')

const sendMessage = () => {
  if (newMessage.value.trim()) {
    messages.value.push({
      id: Date.now(),
      text: newMessage.value,
      sender: 'user',
    })
    newMessage.value = ''
    // Simulate bot response
    setTimeout(() => {
      messages.value.push({
        id: Date.now(),
        text: 'This is a bot response.',
        sender: 'bot',
      })
    }, 1000)
  }
}

onMounted(() => {
  messages.value.push({
    id: Date.now(),
    text: 'Welcome to the chat! How can I help you today?',
    sender: 'bot',
  })
})
</script>

<template>
  <div class="page-container">
    <div class="chat-container">
      <div class="chat-messages">
        <div
          v-for="message in messages"
          :key="message.id"
          :class="message.sender"
        >
          {{ message.text }}
        </div>
      </div>
      <div class="chat-input">
        <input
          v-model="newMessage"
          @keyup.enter="sendMessage"
          placeholder="Type a message..."
        />
        <button @click="sendMessage">Send</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.chat-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.chat-messages {
  height: 300px;
  overflow-y: auto;
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
}

.message {
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 8px;
  max-width: 70%;
}

.user {
  background-color: #e6f2ff;
  align-self: flex-end;
  margin-left: auto;
}

.bot {
  background-color: #f0f0f0;
  align-self: flex-start;
}

.chat-input {
  display: flex;
}

input {
  flex-grow: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
}

button {
  padding: 8px 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
