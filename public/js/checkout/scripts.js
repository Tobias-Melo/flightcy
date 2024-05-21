document.getElementById('clipboardCopy').addEventListener('click', clipboardCopy);
async function clipboardCopy() {
  let text = document.querySelector("#input").value;
  await navigator.clipboard.writeText(text);
}