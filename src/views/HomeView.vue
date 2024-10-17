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
      <h1 class="chat-title">AI Chat Assistant</h1>
      <div class="chat-messages">
        <div
          v-for="message in messages"
          :key="message.id"
          :class="['message', message.sender]"
        >
          <div class="message-content">{{ message.text }}</div>
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
  background-color: #f0f8ff; /* Changed from #e8f0fe to a lighter blue */
}

.chat-container {
  max-width: 800px;
  width: 90%;
  margin: 0 auto;
  padding: 20px;
  border: none;
  border-radius: 16px;
  background-color: #ffffff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.chat-title {
  text-align: center;
  color: #4a90e2; /* Changed from #1a73e8 to a softer blue */
  margin-bottom: 20px;
  font-size: 24px;
}

.chat-messages {
  height: 400px;
  overflow-y: auto;
  padding: 15px;
  border: 1px solid #b0d4ff; /* Changed from #d2e3fc to a slightly darker blue */
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  background-color: #fafafa; /* Changed from #f8f9fa to a slightly warmer tone */
}

.message {
  margin-bottom: 15px;
  max-width: 80%;
}

.message-content {
  padding: 12px 16px;
  border-radius: 18px;
  font-size: 16px;
  line-height: 1.4;
}

.user {
  align-self: flex-end;
}

.user .message-content {
  background-color: #4a90e2; /* Changed from #1a73e8 to match the title color */
  color: white;
  border-bottom-right-radius: 4px;
}

.bot {
  align-self: flex-start;
}

.bot .message-content {
  background-color: #e6f2ff; /* Changed from #e8f0fe to a lighter blue */
  color: #333333; /* Changed from #202124 to a softer black */
  border-bottom-left-radius: 4px;
}

.chat-input {
  display: flex;
  margin-top: 20px;
}

input {
  flex-grow: 1;
  padding: 12px 16px;
  border: 2px solid #4a90e2; /* Changed from #1a73e8 to match the new blue */
  border-radius: 25px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease;
}

input:focus {
  border-color: #3a78c9; /* Changed from #174ea6 to a darker shade of the new blue */
}

button {
  padding: 12px 24px;
  background-color: #4a90e2; /* Changed from #1a73e8 to match the new blue */
  color: white;
  border: none;
  border-radius: 25px;
  margin-left: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #3a78c9; /* Changed from #174ea6 to match the new focus color */
}
</style>
