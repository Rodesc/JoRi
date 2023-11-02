import { useEffect, useState } from 'react';
import Map from './Map/Map.js';
import SideBar from './SideBar/SideBar.js';
import { PROJECTS } from './data';

function App() {
	var [currentProject, setCurrentProject] = useState(PROJECTS[0]);

	useEffect(() => {
		console.log(currentProject.id, 'changed')
	}, [currentProject])
	
	var projects = PROJECTS // TODO connect to backend
	return (
		<div>
			<Map 
				projects={projects}
				currentProject={currentProject}
				setCurrentProject={setCurrentProject}
			/>
			<SideBar project={currentProject}/>
		</div>
  	);
}

export default App;
