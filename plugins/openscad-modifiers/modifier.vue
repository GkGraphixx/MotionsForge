<template>
  <div class="modifier-container">
    <div class="controls">
      <label>Scale: <input type="range" v-model="scale" min="0.1" max="2" step="0.1" /></label>
      <label>Rotate (°): <input type="range" v-model="rotate" min="0" max="360" /></label>
      <label>Translate X: <input type="number" v-model="translateX" /></label>
      <label>Translate Y: <input type="number" v-model="translateY" /></label>
      <button @click="applyModifiers">Apply</button>
    </div>
    <div class="preview">
      <pre>{{ generateModifierCode() }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OpenSCADModifierPanel',
  data() {
    return {
      scale: 1.0,
      rotate: 0,
      translateX: 0,
      translateY: 0
    };
  },
  methods: {
    applyModifiers() {
      console.log('Modifiers applied:', this.generateModifierCode());
      // Future: send to OpenSCAD backend or G-code translator
    },
    generateModifierCode() {
      return `
translate([${this.translateX}, ${this.translateY}, 0])
rotate([0, 0, ${this.rotate}])
scale([${this.scale}, ${this.scale}, 1])
cube([10, 10, 10]);
      `.trim();
    }
  }
};
</script>

<style scoped src="./styles.css"></style>
