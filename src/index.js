document.addEventListener('DOMContentLoaded', () => {
	const p = (document.createElement('p').textContent = 'Hello webpack! v2');
	document.body.append(p);
});
