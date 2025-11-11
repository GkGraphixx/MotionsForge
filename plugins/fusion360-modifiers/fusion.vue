<template>
  <div class="fusion-container">
    <div class="modifiers">
      <label>Extrude Depth: <input type="number" v-model="extrude" /></label>
      <label>Fillet Radius: <input type="number" v-model="fillet" /></label>
      <label>Chamfer Distance: <input type="number" v-model="chamfer" /></label>
      <label>Mirror Axis:
        <select v-model="mirror">
          <option value="X">X</option>
          <option value="Y">Y</option>
          <option value="Z">Z</option>
        </select>
      </label>
      <button @click="applyFusion">Apply Modifiers</button>
    </div>
    <div class="preview">
      <pre>{{ generateFusionCode() }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Fusion360ModifierPanel',
  data() {
    return {
      extrude: 10,
      fillet: 2,
      chamfer: 1,
      mirror: 'X'
    };
  },
  methods: {
    applyFusion() {
      console.log('Fusion modifiers applied:', this.generateFusionCode());
      // Future: send to geometry engine or G-code translator
    },
    generateFusionCode() {
      return `
mirror([${this.mirror === 'X' ? 1 : 0}, ${this.mirror === 'Y' ? 1 : 0}, ${this.mirror === 'Z' ? 1 : 0}])
chamfer(${this.chamfer})
fillet(${this.fillet})
extrude(${this.extrude})
cube([10, 10, 1]);
      `.trim();
    }
  }
};
</script>

<style scoped src="./styles.css"></style>
