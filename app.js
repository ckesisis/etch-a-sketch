window.addEventListener('load', () => {
	document.querySelector('#selectSquares').addEventListener('click', () => {
		let squares = prompt('Please enter squares');

		const tools = document.querySelector('.tools-area');
		tools.innerHTML = '';
		const toolsWidth = tools.offsetWidth;

		for (let i = 0; i < squares; i++) {
			const newDiv = document.createElement('div');
			newDiv.classList.add('flex-container');
			tools.appendChild(newDiv);
			for (let j = 0; j < squares; j++) {
				const newDiv2 = document.createElement('div');
				newDiv2.classList.add('flex-item');
				newDiv2.style.width = toolsWidth / squares + 'px';
				newDiv2.style.height = toolsWidth / squares + 'px';
				newDiv.appendChild(newDiv2);
			}
		}

		const flexItemsDivs = document.querySelectorAll('.flex-item');

		flexItemsDivs.forEach((element) => {
			element.addEventListener('mouseover', () => {
				element.style.backgroundColor = 'red';
			});
		});
	});
});
