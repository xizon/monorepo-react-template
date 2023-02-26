export function MyPluginComponent(text = "Plugin Component Here (from monorepo)") {
    const element = document.createElement("h3");

    element.innerHTML = text;

    return element;
}