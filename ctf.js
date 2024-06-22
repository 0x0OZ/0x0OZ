
console.log(window)
console.log(this)
let elm = document.createElement('webview');elm.src = 'file:///etc/passwd';document.body.appendChild(elm);
console.log(window)

fetch("http://127.0.0.1/oz")
