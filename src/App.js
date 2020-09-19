import React, {useState} from 'react'
import './App.css';
import img from './assets/img.jpg';
import Header from './components/Header';


function App() {
    const [projects,setProject] = useState(['Desenvolvimento de app','Front-end web']);
    function handleAddProject(){
        setProject([...projects,`novo projeto ${Date.now()}`]);
    }
    return(
        <>
            <img src={img} width={300} alt=""/>
            <Header title="Homepage"/>
                <ul>
                    {projects.map(project => <li key={project}>{project}</li>)}
                </ul>
                <button type="button" onClick={handleAddProject}>Adicionar Project</button>
            
        </>
    ) 
}

export default App;