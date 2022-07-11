import App from './App.svelte';
import tailwindBase from './assets/tailwind.css?inline';
// 创建顶层 document 环境的 dom 节点
function createContainerInDocument() {
  const container = document.createElement('div');
  container.id = 'tampermonkey-app';
  container.style.zIndex = "2147483647";
  container.style.position = "fixed";
  return container;
}
// 创建 shadowRoot 环境下的 container 节点（用于挂载 Svelte 示例）
function containerInShadowRoot() {
  const container = document.createElement('div');
  container.id = 'tampermonkey-app-in-shadow-container';
  return container;
}
function createDom() {
  const container = createContainerInDocument();
  const shadowRoot = container.attachShadow({ mode: 'closed' });
  const containerInShadow = containerInShadowRoot();
  shadowRoot.appendChild(containerInShadow);
  document.body.appendChild(container);
  return containerInShadow;
}
function copyCssFromMainDocument(container) {
  // // 将 main document 中的 css 拷贝到 shadow document 中
  // [...document.querySelectorAll('style')].map((i)=>i.cloneNode(true)).forEach((i)=>container.appendChild(i));
  // [...document.querySelectorAll('link')].map(i=>i.cloneNode(true)).forEach(i=>container.appendChild(i));
  const styleDom = document.createElement('style');
  styleDom.innerText = tailwindBase;
  container.appendChild(styleDom);
}
const appDom = createDom();
copyCssFromMainDocument(appDom);
const app = new App({
  target: appDom,
});

export default app;
