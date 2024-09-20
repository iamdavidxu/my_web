import React from 'react';

function About() {
	return (
		<div className='about'>
			<h3>About Me</h3>
			<p>
				Aspiring data scientist and Informatics student at the University of
				Washington, specializing in Data Science. Proficient in PSQL, R,
				Java, Python, HTML, CSS, JavaScript, Adobe Family Suite, and Figma.
				Passionate about leveraging data and design to solve real-world
				problems and create impactful digital experiences.
			</p>
			<div className='showoff'>
				<div className='front'>
					<h4>Front end</h4>
					<div className='frontImg'>
						<img src='./img/html.png' alt='HTML Icon' />
						<img src='./img/css.png' alt='CSS Icon' className='css' />
						<img src='./img/js.png' alt='JavaScript Icon' />
						<img src='./img/figma.png' alt='Figma Icon' />
						<img src='./img/ps.png' alt='Photoshop Icon' />
						<img src='./img/ai.png' alt='Illustrator Icon' />
						<img src='./img/canva.png' alt='Canva Icon' />
						<img src='./img/react.png' alt='React Icon' />
						<img src='./img/node.png' alt='Node.js Icon' />
					</div>
				</div>
				<div className='end'>
					<h4>Back end</h4>
					<div className='backImg'>
						<img src='./img/java.png' alt='Java Icon' />
						<img src='./img/python.png' alt='Python Icon' />
						<img src='./img/sql.png' alt='SQL Icon' />
						<img src='./img/psaql.png' alt='PostgreSQL Icon' />
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
