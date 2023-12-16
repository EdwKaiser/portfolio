import React, { useState } from 'react';
import '../assets/Cart.scss';

function Cart({ projects }) {
  const [centeredProject, setCenteredProject] = useState(null);

  const handleClick = (projectId) => {
    setCenteredProject(projectId === centeredProject ? null : projectId);
  };
console.log(projects)
  return (
    <div className='project'>
      {projects.map((project) => (
        <div key={project.id} className='project__item'>
          <div className='project__item--title'>{project.title}</div>
          <div
            className={`project__item--info ${centeredProject === project.id ? 'no__center' : ''}`}
            onClick={() => handleClick(project.id)}
          >
            <img src={project.picture.src} alt={project.title} />
            
            {centeredProject === project.id && 
              <div className='project__item--info--contain'>
                <div className='description'>
                  {project.description}
                </div>
                {project.website && 
                  <div className='website'>
                    <a href={`${project.website}`} target='_blank' rel='noreferrer'>Accès au site web</a>
                  </div>}
                <div className='tags'>
                  {project.tag.map((tag,index) => (
                    <div key={index} className='tag'>{tag}</div>
                  ))}
                </div>
              </div>
            }
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
