const leftPane = document.querySelector('.panel-1');
const resizer = document.querySelector('.resizer');
const resizerBtn = document.querySelector('.resizer-btn');
const resizerLabel = document.querySelector('.resizer-btn span');
let open = true;

function resize(event) {
	const leftPaneInfo = leftPane.getBoundingClientRect();
	const initialWidth = leftPaneInfo.width;
	let prevX = event.clientX;

	/*
	console.log(`initial width is ${initialWidth}`)
	console.log(`prevX is ${prevX}`)
	console.log(`${leftPane.getBoundingClientRect()}`)
	*/

	function mouseMove(event) {
		const newX = prevX - event.clientX;
		const newWidth = initialWidth - newX;
		leftPane.style.width = `${newWidth}px`;

		if (newWidth > 50) {
			resizerLabel.style.transform = 'rotate(0deg)';
			open = true;
		}

		if (newWidth < 50) {
			resizerLabel.style.transform = 'rotate(180deg)';
			open = false;
		}
	}

	function mouseUp() {
		window.removeEventListener('mousemove', mouseMove);
		window.removeEventListener('mouseup', mouseUp);
	}

	window.addEventListener('mousemove', mouseMove);
	window.addEventListener('mouseup', mouseUp);
}

resizer.addEventListener('mousedown', resize);

function resizeHandler() {
	if (!open) {
		leftPane.style.width = '347px';
		resizerLabel.style.transform = 'rotate(0deg)';
		open = true;
		return;
	}

	if (open) {
		leftPane.style.width = '50px';
		resizerLabel.style.transform = 'rotate(180deg)';
		open = false;
		return;
	}
}

resizerBtn.addEventListener('click', resizeHandler);
