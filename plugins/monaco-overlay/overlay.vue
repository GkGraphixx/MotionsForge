<template>
  <div class="monaco-overlay-container">
    <div id="monaco-editor" class="editor"></div>
    <div class="toolbar">
      <button @click="highlightEncoded">Highlight Encoded Lines</button>
      <button @click="triggerRegeneration">Trigger Regeneration</button>
    </div>
  </div>
</template>

<script>
import * as monaco from 'monaco-editor';

export default {
  name: 'MonacoEditorOverlay',
  data() {
    return {
      editor: null,
      encodedLines: []
    };
  },
  mounted() {
    this.editor = monaco.editor.create(document.getElementById('monaco-editor'), {
      value: `; G-code with encoded logic\nG1 X10 Y10\nG1 X20 Y20 ;#encoded\nG1 X30 Y10\nG1 X40 Y30 ;#encoded`,
      language: 'plaintext',
      theme: 'vs-dark',
      automaticLayout: true
    });
  },
  methods: {
    highlightEncoded() {
      const model = this.editor.getModel();
      const lines = model.getLinesContent();
      this.encodedLines = [];

      lines.forEach((line, index) => {
        if (line.includes('#encoded')) {
          this.encodedLines.push(index);
        }
      });

      this.editor.deltaDecorations([], this.encodedLines.map(line => ({
        range: new monaco.Range(line + 1, 1, line + 1, 1),
        options: {
          isWholeLine: true,
          className: 'encoded-line-highlight'
        }
      })));
    },
    triggerRegeneration() {
      const code = this.editor.getValue();
      console.log('Regenerating based on encoded logic:\n', code);
      // Future: parse encoded lines and regenerate G-code blocks
    }
  }
};
</script>

<style scoped src="./styles.css"></style>
