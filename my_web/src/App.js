import React, { useState } from 'react';
import Header from './components/Header.js';
import About from './components/About.js';
import Experience from './components/Experience.js';
import Projects from './components/Projects.js';
import Links from './components/Links.js';
import Playhouse from './components/Playhouse.js';
import Contact from './components/Contact.js';
import '../src/style.css';

function App() {
	const [expandedProject, setExpandedProject] = useState(null);

	// Function to handle expanding/collapsing projects
	const expandProject = (projectName) => {
		if (expandedProject === projectName) {
			setExpandedProject(null); // Collapse if already expanded
		} else {
			setExpandedProject(projectName); // Expand the selected project
		}
	};

	return (
		<div className='pageContainer'>
			<div className='pageFlex'>
				<Header />
				<About />
				<Experience />
				<Projects
					expandProject={expandProject}
					expandedProject={expandedProject}
				/>
				<Links />
				<Contact />
			</div>
		</div>
	);
}

export default App;
