window.addEventListener('load', () => {
	const tools = document.querySelector('.tools-area');

	for (let i = 0; i < 12; i++) {
		const newDiv = document.createElement('div');
		newDiv.classList.add('flex-container');
		tools.appendChild(newDiv);
		for (let j = 0; j < 12; j++) {
			const newDiv2 = document.createElement('div');
			newDiv2.classList.add('flex-item');
			newDiv.appendChild(newDiv2);
		}
	}
});
