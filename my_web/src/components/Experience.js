import React from 'react';

const experiences = [
	{
		id: 'hl',
		imgSrc: './img/hl.png',
		alt: 'HL language Icon',
		title: 'Market Research Analyst',
		company: 'HL Partners LLC',
		date: '03/2022 - 06/2023',
	},
	{
		id: 'wordplay',
		imgSrc: './img/ischool.jpg',
		alt: 'University of Washington Icon',
		title: 'Undergraduate Researcher',
		company: 'University of Washington iSchool',
		date: '06/2024 - Present',
	},
	{
		id: 'tba',
		imgSrc: './img/tba.png',
		alt: 'UWTBA Icon',
		title: 'Marketing Officer',
		company: 'UW Technology Business Association',
		date: '04/2024 - Present',
	},
	{
		id: 'cssa',
		imgSrc: './img/cssa.jpg',
		alt: 'UWCSSA Icon',
		title: 'Research And Development Officer',
		company: 'UWCSSA',
		date: '09/2022 - 12/2023',
	},
	{
		id: 'bee',
		imgSrc: './img/bee.jpg',
		alt: 'The bee fund Icon',
		title: 'IT Intern',
		company: 'The Bee Fund',
		date: '08/2024 - Present',
	},
];

function Experience() {
	return (
		<div className='experience'>
			<h3>Experiences</h3>
			<ul className='expContainer'>
				{experiences.map((experience) => (
					<li key={experience.id} className={experience.id}>
						<img src={experience.imgSrc} alt={experience.alt} />
						{experience.title}
						<div className='des'>
							<p>{experience.company}</p>
							<p>{experience.date}</p>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Experience;
