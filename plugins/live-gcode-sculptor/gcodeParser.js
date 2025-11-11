export function parseGCode(gcodeText) {
  const lines = gcodeText.split('\n');
  const commands = [];

  lines.forEach(line => {
    const trimmed = line.trim();
    if (trimmed.startsWith('G')) {
      const parts = trimmed.split(' ');
      const command = { type: parts[0], params: {} };
      parts.slice(1).forEach(p => {
        const key = p[0];
        const value = parseFloat(p.slice(1));
        command.params[key] = value;
      });
      commands.push(command);
    }
  });

  return commands;
}
