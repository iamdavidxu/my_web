import React from 'react';

function Links() {
	return (
		<div className='morePage'>
			<h3>My Links</h3>
			<div className='linkContainer'>
				<div className='linkedln'>
					<a
						href='https://www.linkedin.com/in/bingsen-xu'
						target='_blank'
						rel='noopener noreferrer'
					>
						<img src={`./img/linkedln.png`} alt='LinkedIn Icon' />
					</a>
					<h5>Linkedln</h5>
				</div>

				<div className='github'>
					<a
						href='https://github.com/iamdavidxu'
						target='_blank'
						rel='noopener noreferrer'
					>
						<img src={`./img/github.png`} alt='GitHub Icon' />
					</a>
					<h5>GitHub</h5>
				</div>

				{/* Resume Section with Dropdown */}
				<div className='resume'>
					<div className='resume-dropdown'>
						<img src={`./img/resume.png`} alt='Resumes' />
						<h5>Resumes</h5>
						<div className='dropdown-content'>
							<a
								href={`./resume/Data_Analyze.pdf`}
								target='_blank'
								rel='noopener noreferrer'
							>
								Data Analysis
							</a>
							<a
								href={`./resume/UX_UI.pdf`}
								target='_blank'
								rel='noopener noreferrer'
							>
								UI/UX
							</a>
							<a
								href={`./resume/media_production.pdf`}
								target='_blank'
								rel='noopener noreferrer'
							>
								Social Media
							</a>
						</div>
					</div>
				</div>

				<div className='media'>
					<a href='' target='_blank' rel='noopener noreferrer'>
						<img src={`./img/lucy.png`} alt='Video Production Website' />
					</a>
					<h5>Coming soon</h5>
				</div>
			</div>
		</div>
	);
}

export default Links;
