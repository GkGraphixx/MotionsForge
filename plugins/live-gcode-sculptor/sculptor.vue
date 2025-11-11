<template>
  <div class="sculptor-container">
    <canvas ref="canvas" class="gcode-canvas"></canvas>
    <div class="controls">
      <label>Support Angle:
        <input type="range" v-model="supportAngle" min="0" max="90" />
      </label>
      <label>Limit %:
        <input type="range" v-model="limitPercent" min="0" max="100" />
      </label>
      <button @click="simulateGcode">Simulate</button>
    </div>
  </div>
</template>

<script>
import { parseGCode } from './gcodeParser.js';

export default {
  name: 'LiveGcodeSculptor',
  data() {
    return {
      supportAngle: 45,
      limitPercent: 80,
      canvas: null,
      ctx: null
    };
  },
  mounted() {
    this.canvas = this.$refs.canvas;
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight * 0.6;
  },
  methods: {
    async simulateGcode() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      const res = await fetch('./sample.gcode');
      const gcode = await res.text();
      const commands = parseGCode(gcode);

      let x = 0, y = 0;
      commands.forEach(cmd => {
        if (cmd.type === 'G1') {
          const newX = cmd.params.X ?? x;
          const newY = cmd.params.Y ?? y;

          this.ctx.beginPath();
          this.ctx.moveTo(x, y);
          this.ctx.lineTo(newX, newY);
          this.ctx.strokeStyle = `rgba(0,255,0,${this.limitPercent / 100})`;
          this.ctx.lineWidth = this.supportAngle / 10;
          this.ctx.stroke();

          x = newX;
          y = newY;
        }
      });
    }
  }
};
</script>

<style scoped src="./styles.css"></style>
