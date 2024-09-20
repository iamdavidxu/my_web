import React, { useState } from 'react';

function Projects({ expandProject, expandedProject }) {
	const [expandedCategory, setExpandedCategory] = useState(null); // For 'ui' or 'data'

	// Toggle category (UI/UX or Data)
	const toggleCategory = (categoryName) => {
		setExpandedCategory(
			categoryName === expandedCategory ? null : categoryName
		);
		expandProject(null); // Reset expanded project when switching categories
	};

	// Toggle project details (like Spotifeel, Instagram)
	const toggleProjectDetails = (projectName) => {
		expandProject(projectName === expandedProject ? null : projectName);
	};

	// Close all expanded modals
	const closeModal = () => {
		setExpandedCategory(null);
		expandProject(null); // Close any expanded projects
	};

	return (
		<div className='project'>
			<h3>Projects</h3>
			<div className='projectContainer'>
				<div className='ui' onClick={() => toggleCategory('ui')}>
					<h4>UI/UX</h4>
				</div>
				<div className='data' onClick={() => toggleCategory('data')}>
					<h4>Data</h4>
				</div>
			</div>

			{/* UI/UX Projects */}
			{expandedCategory === 'ui' && (
				<div id='uiModal' className='fullscreen-modal'>
					<div className='modal-content'>
						<h4>UI/UX Projects</h4>
						<div className='project-details active'>
							<div
								className='spotifeel'
								onClick={() => toggleProjectDetails('spotifeel')}
							>
								<h5>Spotifeel</h5>
								{expandedProject === 'spotifeel' && (
									<div
										id='spotifeel-details'
										className='project-details-content'
									>
										<img
											src={'./img/spotifeel.png'}
											alt='Spotifeel Website'
										/>
										<h6>Spotifeel Website</h6>
										<p>
											A music streaming app prototype designed for
											enhanced user experience with personalized
											themes.
										</p>
										<a
											href='https://spotifeel-57b89.web.app/'
											target='_blank'
										>
											View Project
										</a>
									</div>
								)}
							</div>

							<div
								className='instagram'
								onClick={() => toggleProjectDetails('instagram')}
							>
								<h5>Instagram</h5>
								{expandedProject === 'instagram' && (
									<div
										id='instagram-details'
										className='project-details-content'
									>
										<img src={'./img/ins.png'} alt='Instagram' />
										<h6>Instagram Redesign</h6>
										<p>
											Redesigned key UI elements to improve user
											engagement on the popular social media
											platform.
										</p>
										<a
											href='https://iamdavidxu.github.io/Instagram/'
											target='_blank'
										>
											View Project
										</a>
									</div>
								)}
							</div>

							<div
								className='safeMap'
								onClick={() => toggleProjectDetails('safeMap')}
							>
								<h5>Safe Map</h5>
								{expandedProject === 'safeMap' && (
									<div
										id='safeMap-details'
										className='project-details-content'
									>
										<img src={'./img/safemap.png'} alt='Safe Map' />
										<h6>Safe Map</h6>
										<p>
											A navigation app using Google Maps and
											real-time city data to guide users on the
											safest route from point A to point B.
										</p>
										<a
											href='https://www.figma.com/proto/NYbRctfq6T3vct6DncJybo/SafeMap?node-id=0-1&t=5yymwvMFCskFIRkQ-1'
											target='_blank'
										>
											View Project
										</a>
									</div>
								)}
							</div>

							<div
								className='planit'
								onClick={() => toggleProjectDetails('planit')}
							>
								<h5>Planit</h5>
								{expandedProject === 'planit' && (
									<div
										id='planit-details'
										className='project-details-content'
									>
										<img src={'./img/planit.png'} alt='Planit' />
										<h6>Planit</h6>
										<p>
											A meal planner app for college students
											featuring a diverse food catalog, easy meal
											customization, and a grocery list.
										</p>
										<a
											href='https://www.figma.com/proto/UJhASp1Hr6NLwtJNqMDJFm/Planit?node-id=1-2&starting-point-node-id=1%3A2&t=3png6IBBzGy3vach-1'
											target='_blank'
										>
											View Project
										</a>
									</div>
								)}
							</div>
						</div>
						<div className='button'>
							<button className='close-btn' onClick={closeModal}>
								Close
							</button>
						</div>
					</div>
				</div>
			)}

			{/* Data Projects */}
			{expandedCategory === 'data' && (
				<div id='dataModal' className='fullscreen-modal'>
					<div className='modal-content'>
						<h4>DATA Projects</h4>
						<div className='project-details active'>
							<div
								className='internet'
								onClick={() => toggleProjectDetails('internet')}
							>
								<h5>Internet Data</h5>
								{expandedProject === 'internet' && (
									<div
										id='internet-details'
										className='project-details-content'
									>
										<img
											src={'../img/internet.png'}
											alt='Internet Data Project'
										/>
										<h6>Internet Data Analysis</h6>
										<p>
											Analysis and visualization of global internet
											data trends using advanced machine learning
											algorithms.
										</p>
										<a
											href='https://aidanbartlett0.shinyapps.io/InternetInformation/'
											target='_blank'
										>
											View Project
										</a>
									</div>
								)}
							</div>

							<div
								className='airbnb'
								onClick={() => toggleProjectDetails('airbnb')}
							>
								<h5>Airbnb Data</h5>
								{expandedProject === 'airbnb' && (
									<div
										id='airbnb-details'
										className='project-details-content'
									>
										<img
											src={'../img/airbnb.png'}
											alt='Airbnb Data Project'
										/>
										<h6>Airbnb Data</h6>
										<p>
											Built a relational database for Airbnb data,
											optimizing queries for listings, bookings, and
											revenue insights.
										</p>
										<a
											href='https://github.com/iamdavidxu/Airbnb-Data-Modeling'
											target='_blank'
										>
											View Project
										</a>
									</div>
								)}
							</div>
						</div>
						<div className='button'>
							<button className='close-btn' onClick={closeModal}>
								Close
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Projects;
