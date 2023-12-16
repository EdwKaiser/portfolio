import '../assets/Project.scss'
import Cart from '../components/Cart.js'
import fetchData from '../data/api.js'
import { useState, useEffect } from 'react'

function Project() {
    const [projects, setProjects] = useState([])
    console.log(projects)
    useEffect(() => {
        async function fetchProjects() {
            const data = await fetchData('../portfolio/project.json')

            if(data) {
                setProjects(data)
            }
        } 
        fetchProjects()
    }, [])

    
    return (
        <div className='gallery'>
            <h1>Mes missions</h1>
            <Cart projects={projects}/>
        </div>
    )
}

export default Project