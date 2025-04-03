import React from 'react'
import "./projects.css"
import Image from 'next/image'
import { SiGithub } from "react-icons/si";
import { useState } from 'react';
import { motion } from 'framer-motion';


const Projects = () => {
  const [hover, sethover] = useState(null);


  const hoverhandler = (index) => {
    sethover(index)
  }
  const projectslist = [
    {
      name: "Job Board",
      path: "/job_board.png",
      githuburl: "https://github.com/NAVEEN171/Job_board",
      livelink: "https://job-board-rust-alpha.vercel.app",
      TechStack: "Nextjs  Typescript,Tailwind Mongodb",
      description: "Built a custom job board with advanced filters, AI powered resume tailoring, and a secure MongoDB backend with JWT authentication"

    },
    {
      name: "Path Finding Visualizer",
      path: "/pathfindingvisualizer.png",
      githuburl: "https://github.com/NAVEEN171/PathFinding_Visualizer",
      livelink: "https://naveen171.github.io/PathFinding_Visualizer/",
      TechStack: "React JS",
      description: "Built an interactive pathfinding visualizer with BFS, DFS, Dijkstra, A*, and maze generation algorithms "

    },
    {
      name: "Chat Application",
      path: "/chatapp.png",
      githuburl: "https://github.com/NAVEEN171/chat_app",
      livelink: "https://chat-app-five-dun.vercel.app/",
      TechStack: "MERN STACK",
      description: "Built a real-time chat application with authentication, online/offline status, user photo updates, and latest-first message sorting, using MongoDB and sockets."
    }, {
      name: "Landing Page",
      path: "/applyai.png",
      githuburl: "https://github.com/NAVEEN171/apply_ai",
      livelink: "https://apply-ai-pro.vercel.app/",
      TechStack: "Next JS",
      description: ""
    },

  ]
  const deletedProjects = [
    {
      name: "Tic-Tac-Toe",
      path: "/tictactoe.png",
      githuburl: "https://github.com/NAVEEN171/Tic-Tac-Toe",
      livelink: "https://naveen171.github.io/Tic-Tac-Toe/",
      TechStack: "JavaScript",
      description: ""
    },
    {
      name: "Memory Game",
      path: "/memorygame.png",
      githuburl: "https://github.com/NAVEEN171/memorygame",
      livelink: "https://naveen171.github.io/memorygame/",
      TechStack: "JavaScript",
      description: ""
    }

  ]
  return (
    <div className='projects_container' id="Projects">
      <h1 className='container_name  '>My Project Works</h1>
      <div className='projects_wrapper'>
        {projectslist.map((project, index) => (<div className='project' onMouseLeave={() => { hoverhandler(null) }} onMouseEnter={() => { hoverhandler(index) }} key={project.name}><div className='project_heading'>
          <div className='project_subheader'>
            <h1 className='heading'>{project.name}

            </h1>

            <a href={project.githuburl}><SiGithub className='github_icon' /></a>
          </div>
          {project.description && <h2 className='description'>{project.description}
          </h2>}

        </div>

          <div className='project_subheading'>
            <div className='photowrapper'>
              <div className='project_photo'>
                <div className='project_up'>
                  {index === hover &&
                    <div>{project.TechStack.split(",").map((technology, idx) => <motion.h2 key={idx} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className='techstack'>{technology}</motion.h2>)}</div>}
                </div>
                <div className='box'></div>
                <div className='box2'></div>
                <div className='photowrapper2'>
                  <img className='projectimage' loading="lazy" src={`${project.path}`} alt="pathfinding" ></img>
                </div>
                <a href={project.livelink}><div className='arrow_project'>

                  <svg className="arrows" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#e8eaed"><path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z" /></svg>
                </div></a>
              </div>

            </div>


          </div>

        </div>))
        }
      </div>
    </div>
  )
}

export default Projects
