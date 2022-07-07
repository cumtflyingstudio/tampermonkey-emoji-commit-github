function debounce(fn:()=>void,delay = 500) {
  let timer = null
  return function (...args:unknown[]) {
    timer !== null && clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    },delay)
  }
}
export default debounce