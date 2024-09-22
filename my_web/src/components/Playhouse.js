import React from 'react';
let audioContext = null;

document.addEventListener('click', () => {
	if (!audioContext) {
		audioContext = new (window.AudioContext || window.webkitAudioContext)();
	} else if (audioContext.state === 'suspended') {
		audioContext.resume();
	}
});
function Playhouse() {
	return (
		<div className='playhouse'>
			<h3>Playhouse</h3>
			<div className='playContainer'>
				<iframe
					src='https://my.spline.design/untitled-dbe6ca7e88ecb5951de6a619e05aa4da/?v=latest'
					width='100%'
					height='100%'
				></iframe>
			</div>
		</div>
	);
}
export default Playhouse;
