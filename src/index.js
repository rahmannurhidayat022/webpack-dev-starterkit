import './styles/style.css';

document.addEventListener('DOMContentLoaded', () => {
	const p = document.createElement('p');
	p.textContent = 'Hello webpack!';
	document.body.append(p);
});
