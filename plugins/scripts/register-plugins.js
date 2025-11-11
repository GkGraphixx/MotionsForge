// Auto-register all plugins in the plugins folder
export async function registerAllPlugins(app) {
  const pluginModules = import.meta.glob('../plugins/*/index.js');

  for (const path in pluginModules) {
    const plugin = await pluginModules[path]();
    if (plugin?.install) {
      plugin.install(app);
      console.log(`✅ Registered plugin: ${plugin.name}`);
    } else {
      console.warn(`⚠️ Skipped plugin at ${path}`);
    }
  }
}
