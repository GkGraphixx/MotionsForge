<template>
  <div class="viewer-container">
    <canvas ref="canvas" class="mesh-canvas"></canvas>
    <div class="collab-panel">
      <textarea v-model="chat" placeholder="Type your message..."></textarea>
      <button @click="sendMessage">Send</button>
    </div>
  </div>
</template>

<script>
import { loadMesh } from './meshLoader.js';

export default {
  name: 'FederateVisualizer',
  data() {
    return {
      canvas: null,
      gl: null,
      chat: ''
    };
  },
  mounted() {
    this.canvas = this.$refs.canvas;
    this.gl = this.canvas.getContext('webgl');
    loadMesh(this.gl);
  },
  methods: {
    sendMessage() {
      console.log('Collaborator says:', this.chat);
      this.chat = '';
    }
  }
};
</script>

<style scoped src="./styles.css"></style>
