<template>
  <div class="wire-container">
    <div class="module-panel">
      <div v-for="(block, index) in blocks" :key="index" class="block">
        <label>{{ block.name }}</label>
        <textarea v-model="block.code" />
      </div>
      <button @click="addBlock">Add Module</button>
    </div>
    <div class="preview-panel">
      <pre>{{ generatePreview() }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WireCodeSculptor',
  data() {
    return {
      blocks: [
        { name: 'Start', code: 'G28 ; Home all axes' },
        { name: 'Heat', code: 'M104 S200 ; Set nozzle temp' }
      ]
    };
  },
  methods: {
    addBlock() {
      this.blocks.push({ name: `Module ${this.blocks.length + 1}`, code: '' });
    },
    generatePreview() {
      return this.blocks.map(b => `// ${b.name}\n${b.code}`).join('\n\n');
    }
  }
};
</script>

<style scoped src="./styles.css"></style>
