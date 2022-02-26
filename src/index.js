document.addEventListener("DOMContentLoaded", () => {
	const p = (document.createElement("p").textContent = "Hello webpack!");
	document.body.append(p);
});
