import React from 'react'
import "./skills.css"
import Image from 'next/image'
const Skills = () => {
    const Skillslist = [
        {
            skill: "Next JS",
            svglink: "/svgs/nextjs.svg"
        },
        {
            skill: "React JS",
            svglink: "/svgs/reactjs.svg"
        },
        {
            skill: "Node JS",
            svglink: "/svgs/nodejs.svg"
        },
        {
            skill: "Mongo DB",
            svglink: "/svgs/mongodb.svg"
        },
        {
            skill: "Git",
            svglink: "/svgs/github.svg"
        },
        {
            skill: "JS",
            svglink: "/svgs/js.svg"
        },
        {
            skill: "HTML",
            svglink: "/svgs/html.svg"
        },
        {
            skill: "CSS",
            svglink: "/svgs/css.svg"
        }
        ,
        {
            skill: "TS",
            svglink: "/svgs/typescript.svg"

        },
        {
            skill: "Tailwind css",
            svglink: "/svgs/tailwind-css.svg"
        }



    ]
    return (
        <div className='Skills_section' id="Skills">
            <div className='skills_heading name'>SKILLS</div>
            <div className='skills_wrapper'>
                {Skillslist.map((skill) => (
                    <div className='skills_card' key={skill.skill}>
                        <div className='skills_top'>
                            <div className='skill_topsection'>
                                <Image className='skillimage' src={`${skill.svglink}`}
                                    alt="nextjssvg"
                                    fill
                                    style={{ objectFit: 'contain' }}></Image>
                            </div>
                        </div>
                        <div className='skills_bottom'><h2>{skill.skill}</h2></div>
                    </div>
                ))
                }
            </div>

        </div>
    )
}

export default Skills
