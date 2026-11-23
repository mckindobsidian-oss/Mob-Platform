document.getElementById('year').textContent = new Date().getFullYear();

const preview = document.querySelector('img[src="assets/workspace.png"]');
if (preview && !preview.complete) {
  preview.classList.add("loading-preview");
  const finish = () => preview.classList.remove("loading-preview");
  preview.addEventListener("load", finish, { once: true });
  preview.addEventListener("error", finish, { once: true });
}
