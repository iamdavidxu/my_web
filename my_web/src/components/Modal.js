import React from 'react';

function Modal({ content, closeModal }) {
	return (
		<div className='fullscreen-modal active'>
			<div className='modal-content'>
				<h4>{content}</h4>
				<button className='close-btn' onClick={closeModal}>
					Close
				</button>
			</div>
		</div>
	);
}

export default Modal;
