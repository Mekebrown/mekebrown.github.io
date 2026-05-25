function fillWave(el, count) {
	if (!el) return;
	el.innerHTML = "";
	for (let i = 0; i < count; i++) {
		const s = document.createElement("span");
		s.style.height =
			16 + Math.sin(i / 2.2) * 20 + Math.random() * 58 + "px";
		el.appendChild(s);
	}
}
function setupModal() {
	const wrap = document.getElementById("modalWrap");
	const close = document.getElementById("closeModal");
	if (close) close.onclick = () => wrap.classList.remove("show");
	if (wrap)
		wrap.onclick = (e) => {
			if (e.target.id === "modalWrap") wrap.classList.remove("show");
		};
}
function openModal(title, body) {
	const wrap = document.getElementById("modalWrap");
	document.getElementById("modalTitle").textContent = title;
	document.getElementById("modalBody").innerHTML = body;
	wrap.classList.add("show");
}
function closeModal() {
	const wrap = document.getElementById("modalWrap");
	if (wrap) wrap.classList.remove("show");
}
window.openModal = openModal;
window.closeModal = closeModal;
