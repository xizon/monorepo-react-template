export function MyPluginComponent(text = "Plugin Component Here (from monorepo)") {
    const element: HTMLElement = document.createElement("h3");

    element.innerHTML = text;

    return element;
}