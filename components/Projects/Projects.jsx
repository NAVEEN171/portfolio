import React from 'react'
import "./projects.css"
import Image from 'next/image'
Image

const Projects = () => {
  return (
    <div className='projects_container'>
      <div className='projects_wrapper'>
        <div className='project'>
         <div className='project_heading'>Landing Page</div>
         <div className='project_subheading'> 
            <div className='photowrapper'>
              <div className='project_photo'> 
                <Image className='projectimage' format="png" quality={75} src="/vector (38).png" alt="pathfinding" width={250} height={250}></Image>
              </div>
                
            </div>


         </div>

        </div>
      </div>
    </div>
  )
}

export default Projects
