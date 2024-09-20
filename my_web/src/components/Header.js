import React from 'react';

function Header() {
	return (
		<div className='pageContainer'>
			<div className='begin'>
				<div className='pageHead'>
					<div className='spacer'></div>
					<div className='dashBoard'>
						<div className='menu'>
							<span className='material-symbols-outlined'> menu </span>
						</div>
						<div className='dashboardContainer'>
							<div className='home'>
								<span className='material-symbols-outlined'>Home</span>
							</div>
							<div className='aboutMe'>
								<span className='material-symbols-outlined'>
									person
								</span>
							</div>
							<div className='experience'>
								<span className='material-symbols-outlined'>
									{' '}
									school{' '}
								</span>
							</div>
							<div className='project'>
								<span className='material-symbols-outlined'>
									{' '}
									rocket{' '}
								</span>
							</div>
							<div className='otherInfo'>
								<span className='material-symbols-outlined'>
									stadia_controller
								</span>
							</div>
							<div className='playHouse'>
								<span className='material-symbols-outlined'>
									{' '}
									rocket{' '}
								</span>
							</div>
							<div className='contact'>
								<span className='material-symbols-outlined'>
									contact_page
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className='pageBegin'>
					<div className='beginText'>
						<div className='glass'>
							<h1>Hi I am David,</h1>
							<h2>Welcome to My Page</h2>
						</div>
						<div className='exploreGlass'>
							<p>Start Exploring</p>
						</div>
					</div>
					<div className='profilePhoto'>
						<img
							src='./img/profile.jpg'
							alt='A picture of David'
							className='photo'
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
